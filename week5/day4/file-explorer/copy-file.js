const fs = require('fs').promises;
const path = require('path');

async function copyFile(){
    try{
        const sourcePath = path.join(__dirname, 'source.txt');
        const content = await fs.readFile(sourcePath, 'utf8');

        const destPath = path.join(__dirname, 'destination.txt')
        await fs.writeFile(destPath, content, 'utf8');

        console.log('file copied successfuly!');
    } catch (err){
        console.error('Error: ', err.message)
    }
}
copyFile();