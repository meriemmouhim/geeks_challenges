const API_KEY = `hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;
const form = document.getElementById('gif-form');
const searchInput = document.getElementById('search-input');
const gifContainer = document.getElementById('gif-container');
const deleteAllBtn = document.getElementById('delete-all');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();
    if(searchTerm){
        try{
            const gifData = await fetchRandomGif(searchTerm);
            console.log("API Response Data:", gifData);
            displayGif(gifData);
            searchInput.value = '';
        }catch (error){
            console.error('fetching gif failed: ', error)
            alert('please try again')
        }
    }
    
});
deleteAllBtn.addEventListener('click', function(){
    gifContainer.innerHTML = '';
});

async function fetchRandomGif(searchTerm){
    const response = await fetch (`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${searchTerm}`);
    if (!response.ok){
        throw new Error(`HTTP errer! status: ${response.status}`);
    }
    return await response.json();
}
function displayGif(gifData){
    if(!gifData.data){
        alert('NO gif found');
        return;
    }
    const gifURL = gifData.data.images.fixed_height.url;
    const gifItem = document.createElement('div');
    gifItem.className = 'gif-item';
    const img = document.createElement('img');
    img.src = gifURL;
    img.alt = gifData.data.title;
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener('click', function(){
        gifItem.remove();
    });

    gifItem.appendChild(img);
    gifItem.appendChild(deleteBtn);
    gifContainer.appendChild(gifItem);
}
