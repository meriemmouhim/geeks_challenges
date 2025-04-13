fetch(`https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(`giphy api reponce:`, data);
        if (data.data && data.data.length > 0) {
            console.log(`Found ${data.data.length} gifs`);
            console.log('First gif:', data.data[0]);
        }
    })
    .catch (error => {
        console.error('Error fetching data from Giphy API:', error);
    })
