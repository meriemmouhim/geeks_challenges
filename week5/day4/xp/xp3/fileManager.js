const fs = require('fs').promises;
const path = require('path');

async function readFile(filePath){
    try{
        const absolutePath = path.resolve(filePath);
        return  await fs.readFile(absolutePath, 'utf8');
    }catch (err){
        throw new Error(`failed to read the message: ${err.message}`);
    }
};
async function writeFile(filePath, content){
    try{
        const absolutePath = path.resolve(filePath);
        await fs.writeFile(absolutePath, content, 'utf8');
    }catch (err){
        throw new Error(`failed to read the message: ${err.message}`);
    }
}
module.exports = { readFile, writeFile };
