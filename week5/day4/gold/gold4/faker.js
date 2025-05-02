const { faker } = require('@faker-js/faker');
const prompts = require('prompts');

const users = [];
function fakeUsers() {
    const user = {
        name: faker.person.fullName(),
        address: {
            street: faker.location.street(),
            country: faker.location.country(),
        }
    }
    users.push(user);
    return user;
}

async function realUser(){
    const response = await prompts([
        {
            type: 'text',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'text',
            name: 'street',
            message: 'What is your street?',
        },
        {
            type: 'text',
            name: 'country',
            message: 'What is your country?',
        }
    ]);
    const user = {
        name: response.name,
        address: {
            street: response.street,
            country: response.country,
        }
    };
    users.push(user);
    return user;
}

function getUsers() {
    console.log('users: ');
    users.forEach((user, index) => {
        console.log(`${index + 1}. Name: ${user.name}, Adress: ${user.address.street}, Country: ${user.address.country}`);
    })
}

function test(){
    fakeUsers();
    fakeUsers();
    getUsers();
}
test();

module.exports = {
    users,
    fakeUsers,
    realUser,
    getUsers
};