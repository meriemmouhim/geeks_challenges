const postTitles = require('./fetch-data');

postTitles()
    .then(() => console.log('fetched seccessfully'))
    .catch((err) => console.error('failed to fetch the posts', err))