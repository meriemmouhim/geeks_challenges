const fs = require('fs').promises;
const { console } = require('inspector');
const path = require('path');

async function readDirectory(){
    try{
        const dirPath = path.join(__dirname);
        const files = await fs.readdir(dirPath);

        console.log('file in directory: ')
        files.forEach(file => console.log(file));
    }catch (err){
        console.error('Error: ', err.message);
    };
};
readDirectory();