/**
 * Copy the assets from the `docs` to the public destination folder
 */

import * as fs from 'fs';
import * as path from 'path';
import MINI_DOCS_CONFIG from './mini-docs.config.json';

const DIR = MINI_DOCS_CONFIG.docs || 'docs';
const copyAssetsToPath = MINI_DOCS_CONFIG.public || './docs';
const ASSETS = ['.svg', '.png'];
ASSETS.push(...MINI_DOCS_CONFIG.assets);

function readThroughDir(nextPath: string): void {

    const files = fs.readdirSync(nextPath);

    files.forEach((file) => {

        const next = path.join(nextPath, file);

        // * go through each subdirectories recursively
        if (fs.statSync(next).isDirectory()) {
            readThroughDir(next);
        }

        // * Copy assets
        else if (ASSETS.includes(path.extname(file).toLowerCase())) {
            fs.copyFileSync(next, `${copyAssetsToPath}/${file}`);
        }

    });

}

readThroughDir(DIR);
