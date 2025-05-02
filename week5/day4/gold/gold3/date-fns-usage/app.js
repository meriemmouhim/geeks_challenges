const date = require('./date-operations');

date()
    .then(() => console.log('date operations completed successfully'))
    .catch((err) => console.error('failed to perform date operations', err));