// exercise 1
function comparetoten(num){
    return new Promise((resolve, reject) => {
        if(num <= 10){
            resolve(`${num} is less than or equal to 10`);
        }else{
            reject(`${num} is greater than 10`);
        };
    });
};
comparetoten(16)
    .then(result => console.log(result))
    .catch(error => console.log(error));
comparetoten(7)
    .then(result => console.log(result))
    .catch(error => console.log(error));


// exercise 2
const delay = new Promise((resolve) => {
    setTimeout(() => {
        resolve("success");
    }, 4000);
});
delay
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

// exercise 3
const yayPromise = Promise.resolve(3);
yayPromise.then(val => console.log(val));
const nahPromise = Promise.reject("nope");
nahPromise.catch(err => console.log(err));
