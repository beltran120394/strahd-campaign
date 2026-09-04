import { readdir } from "node:fs/promises";


const folder = process.env.OBSIDIAN_PATH;

if(!folder) {
    throw new Error("OBSIDIAN_PATH environment variable is not set.");
}

const files = await readdir(folder!, { recursive: true });
console.log(files);