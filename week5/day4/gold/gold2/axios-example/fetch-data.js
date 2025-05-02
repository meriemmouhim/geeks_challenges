const axios  = require('axios');

async function postFecth(){
    try{
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return responce.data;
    }catch (error){
        console.error('an error has occured: ', error.message);
        return [];
    }
}

async function postTitles(){
    const posts = await postFecth();
    posts.forEach(post => {
        console.log(`Title: ${post.title}`);
    })
}
module.exports = postTitles;