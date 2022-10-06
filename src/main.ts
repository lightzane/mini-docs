import * as fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import jsYaml from 'js-yaml';
import { Author, MiniDocs, Metadata } from './mini-docs.interface';
import MINI_DOCS_CONFIG from './mini-docs.config.json';

const DIR = MINI_DOCS_CONFIG.docs || 'docs';
const MD = '.md';
const ASSETS = ['.svg', '.png'];
ASSETS.push(...MINI_DOCS_CONFIG.assets);
const copyAssetsToPath = MINI_DOCS_CONFIG.public || './docs';
const targetFiles: string[] = [];
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

        // * Copy assets
        else if (ASSETS.includes(path.extname(file).toLowerCase())) {
            fs.copyFileSync(next, `${copyAssetsToPath}/${file}`);
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

        const markdownDocument: MiniDocs = {
            title: getTitle(updatedFileContent),
            content: marked(updatedFileContent.replace(regexTruncate, '')),
            truncatedContent: marked(getTruncatedContent(updatedFileContent).replace(regexTruncate, '')),
            overview: marked(getOverviewContent(updatedFileContent)),
            metadata
        };
        miniDocsList.push(markdownDocument);
    });

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
            .substring(end + spaceAllowance).trimStart();

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

/** Retrieve the title from the first `#` in the content */
function getTitle(markdownContent: string): string {
    const [title] = /#.*/.exec(markdownContent) || ['# Untitled'];
    return title.replace(/.*#\s*/, '');
}

/** Gets the summary of the content until truncate is found. Else will return the title */
function getOverviewContent(markdownContent: string): string {

    let overview = `# ${getTitle(markdownContent)}`;

    const truncateMatches = regexTruncate.exec(markdownContent);

    if (markdownContent && truncateMatches?.length) {
        const truncateIndex = truncateMatches.index;
        overview = markdownContent.substring(0, truncateIndex);
    }

    return overview;
}

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

fs.writeFileSync(`./docs/list.js`, `const list = ${JSON.stringify(miniDocsList, null, 2)}\n`, { encoding: 'utf-8' });
