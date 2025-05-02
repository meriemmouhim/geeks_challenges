const fs = require('fs');
const path = require('path');

function getFiles() {
    const filepath = path.join(__dirname, 'data', 'example.txt');
    const fileExists = fs.existsSync(filepath);

    console.log(`file exists:  ${fileExists ? 'yes' : 'no'}`);

    if (fileExists){
        const status  = fs.statSync(filepath);
        console.log(`file size: ${status.size} bytes`);
        console.log(`file created: ${status.birthtime.toLocaleString()}`);
        console.log(`last modified: ${status.mtime.toLocaleString()}`);
    }else{
        console.log('file cannot be found');
    }
    return { fileExists, filepath };
}
module.exports = getFiles ;