import * as fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import jsYaml from 'js-yaml';
import { Author, MiniDocs, Metadata } from './mini-docs';
import MINI_DOCS_CONFIG from './mini-docs.config.json';

/** The generated file in which all the markdown documents are listed as `mini-docs` */
const outputFilename = MINI_DOCS_CONFIG?.output || 'list.ts';

/** The directory in which the output and assests are pasted */
const outputDir = MINI_DOCS_CONFIG?.public || 'public';

/** The average `wpm` of a person to read */
const WPM = MINI_DOCS_CONFIG?.wpm || 220;

/** The main directory in which all the markdown documents / authors.yml is located */
const DIR = MINI_DOCS_CONFIG?.docs || 'docs';

/** The extension of the file to look for and treated as a markdown document */
const MD = '.md';

/** The list of all identified candidates for markdown documents */
const targetFiles: string[] = [];

/** The list of prod-ready `mini-docs` */
const miniDocsList: MiniDocs[] = [];

const regexTruncate = /<!-- truncate -->/;

type AuthorYaml = { [author: string]: Author; };

let globalAuthors: AuthorYaml | undefined;

try {
    globalAuthors = jsYaml.load(fs.readFileSync(`${DIR}/authors.yml`, { encoding: 'utf-8' })) as AuthorYaml;
}
catch (err) {
    console.warn('authors.yml - not found or contains errors');
}

function readThroughDir(nextPath: string): void {

    const files = fs.readdirSync(nextPath);

    files.forEach((file) => {

        const next = path.join(nextPath, file);

        // * go through each subdirectories recursively
        if (fs.statSync(next).isDirectory()) {
            readThroughDir(next);
        }

        // * Get list of files with its path
        else if (path.extname(file) === MD) {
            targetFiles.push(next);
        }

    });

}

/**
 * Read the content and parse it to HTML.
 * The output will be stored and pushed in `miniDocsList`
 * @param files The markdown filename with paths
 */
function readAndMark(files: string[]): void {

    files.forEach((file) => {
        const fileContent = fs.readFileSync(file, { encoding: 'utf-8' });
        const [metadata, updatedFileContent] = extractFrontMatter(fileContent);
        const title = getTitle(updatedFileContent);

        const markdownDocument: MiniDocs = {
            title,
            markedTitle: marked(`# ${title}`),
            timeToRead: getTimeToRead(updatedFileContent),
            content: marked(updatedFileContent.replace(regexTruncate, '')),
            truncatedContent: marked(getTruncatedContent(updatedFileContent).replace(regexTruncate, '')),
            overview: marked(getOverviewContent(updatedFileContent)),
            metadata
        };
        miniDocsList.push(markdownDocument);
    });

}

/** Calculate time to read in minutes */
function getTimeToRead(content: string): string {
    const words = content.trim().split(/s+/).length;
    const time = Math.ceil(words / WPM);
    return `${time} min read`;
}

/**
 * Extracts the metadata (front matter) out from the main content
 * @param markdownContent The entire content of the markdown file
 * @returns [`metadata`, `updatedMarkdownContent`] 
 */
function extractFrontMatter(markdownContent: string): [Metadata | undefined, string] {
    const delimeter = '---';
    const hasDelimiter = markdownContent.includes(delimeter);

    let start = markdownContent.indexOf(delimeter);
    let end = markdownContent.lastIndexOf(delimeter);

    start = start >= 0 ? start + delimeter.length + 1 : 0;
    end = end >= 0 ? end - 1 : 0;

    const spaceAllowance = hasDelimiter ? start : 0; // to exclude "---" in the updatedMarkdownContent

    const updatedMarkdownContent =
        markdownContent
            .substring(end + spaceAllowance).trimStart(); // trim to remove the extra \r\n 

    let yaml = markdownContent.substring(start, end);

    yaml = yaml.includes('#') ? '' : yaml;

    return [
        parseYaml(yaml),
        updatedMarkdownContent
    ];
}

/** Parse the yaml into a `metadata` object */
function parseYaml(yaml: string): Metadata | undefined {
    let metadata = undefined;

    if (yaml) {
        metadata = jsYaml.load(yaml) as Metadata;
    }

    // * Authors
    if (metadata) {
        if (metadata.authors) {
            injectAuthors(metadata.authors);
        }
    }

    return metadata;
}

/** Get the Authors and attach it to the metadata */
function injectAuthors(authors: Author[]): void {
    // * Author is Array
    if (Array.isArray(authors)) {
        authors.forEach((author, index) => {
            // string
            if (typeof author === 'string') {
                if (globalAuthors && globalAuthors[author]) {
                    authors[index] = globalAuthors[author];
                } else {
                    authors[index] = undefined as any;
                }
            }
            // JSON object
            else {
                // nothing to do
            }
        });
    }

    // * Author is a single JSON object
    else {
        authors = [authors];
    }
}

/** Retrieve the title from the first `#` in the content without the `#` */
function getTitle(markdownContent: string): string {
    const [title] = /#.*/.exec(markdownContent) || ['# Untitled'];
    return title.replace(/.*#\s*/, '');
}

/** Gets the summary of the content (excluding the title) until truncate is found. */
function getOverviewContent(markdownContent: string): string {

    let overview = '';

    const truncateMatches = regexTruncate.exec(markdownContent);

    if (markdownContent && truncateMatches?.length) {
        const truncateIndex = truncateMatches.index;
        overview = markdownContent.substring(0, truncateIndex);
        const lines = overview.split('\n');
        lines.splice(0, 1); // delete the first line
        overview = lines.join('\n');
    }

    return overview;

}

/** Gets the remaining content after the summary has been truncated. */
function getTruncatedContent(markdownContent: string): string {
    let content = markdownContent;

    // remove the title
    content = content.replace(/^(.*)$/m, '');

    const truncateMatches = regexTruncate.exec(markdownContent);

    if (markdownContent && truncateMatches?.length) {
        const truncateIndex = truncateMatches.index;
        content = markdownContent.substring(truncateIndex);
    }

    return content;
}

readThroughDir(DIR);

readAndMark(targetFiles);

miniDocsList.sort((a, b) => {
    // prioritize the one with a published_date
    const prev = +new Date(a.metadata?.published_date || -1);
    const next = +new Date(b.metadata?.published_date || -1);

    return next - prev;
});

const addExport = outputFilename.includes('.ts') ? 'export ' : '';

fs.writeFileSync(`./${outputDir}/${outputFilename}`, `${addExport}const miniDocsList = ${JSON.stringify(miniDocsList, null, 2)}\n`, { encoding: 'utf-8' });
