import * as fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import { MarkdownContent } from './markdown-content.interface';

const DIR = './.docs';
const MD = '.md';
const ASSETS = ['.png', '.webp', '.svg'];
const copyAssetsToPath = './docs';
const targetFiles: string[] = [];
const markedContentList: MarkdownContent[] = [];

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
 * Read the content and parse it to HTML
 * @param files The markdown filename with paths
 */
function readAndMark(files: string[]): void {

    files.forEach((filepath) => {
        const file = fs.readFileSync(filepath, { encoding: 'utf-8' });
        const markdownContent: MarkdownContent = {
            title: file.split('\n')[0].replace(/^#\s*/, ''),
            content: marked(file)
        };
        markedContentList.push(markdownContent);
    });

}

readThroughDir(DIR);

readAndMark(targetFiles);

console.log(markedContentList);
