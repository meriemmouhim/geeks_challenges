const { realUser, getUsers } = require('./faker.js');

async function main() {
    await realUser();
    getUsers();
}
main();