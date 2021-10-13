#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const process = require("process");
const encode = require("base64-arraybuffer").encode;

const projectDir = path.join(process.env.INIT_CWD, "projectfiles");
const outFile = path.join(process.env.INIT_CWD, "blobs.json");
const projectBlobs = [];

if (!fs.existsSync(projectDir)) {
  console.warn(
    "The projectfiles subdirectory was not found. Are you in the right directory?"
  );
  process.exit(1);
}

fs.readdirSync(projectDir).forEach((file) => {
  if (file.endsWith(".dbp")) {
    const filename = path.join(projectDir, file);
    console.log("Processing: ", filename);
    const content = fs.readFileSync(filename);
    projectBlobs.push(encode(content));
  }
});

if (projectBlobs.length === 0) {
  console.warn("No .dbp files were found. Are you in the right directory?");
  process.exit(1);
} else {
  fs.writeFileSync(outFile, JSON.stringify(projectBlobs));
  console.log(`Success! ${projectBlobs.length} files were processed.`);
  process.exit();
}
