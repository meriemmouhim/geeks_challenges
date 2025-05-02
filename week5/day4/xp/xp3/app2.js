const { readFile, writeFile } = require('./fileManager');
async function main(){
    try{
        const content = await readFile(`hello_world.txt`);
        console.log('file conetent:', content);
        await writeFile('bye_world.txt', 'writing in the file');
        console.log('successfully written in the file');
    }catch(error){ 
        console.error('an error has occured:', error.message)
    }
}
main()