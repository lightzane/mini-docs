import * as fs from 'fs';
import path from 'path';

const DIR = './docs';
const MD = '.md';
const ASSETS = ['.png', '.webp', '.svg'];
const targetFiles: string[] = [];
const copyAssetsToPath = './src/assets';

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

readThroughDir(DIR);

console.log(targetFiles);
