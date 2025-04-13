const apiURL = new URL('https://api.giphy.com/v1/gifs/search');
    apiURL.searchParams.append('api_key', 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
    apiURL.searchParams.append('q', 'sun');
    apiURL.searchParams.append('limit', '10');
    apiURL.searchParams.append('offset', '2');
    apiURL.searchParams.append('rating', 'g');
    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log("gipy api responce:", data)
        })
