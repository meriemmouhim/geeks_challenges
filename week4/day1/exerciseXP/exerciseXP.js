// exercice 1
// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?    #we won't be able to reassigne it a new value

//#2
// let a = 0;   #cannot re-declare a
a = 0 ;   // this is how to re-declare a 
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree() // will console a as 0  since the value haven't been changed yet
funcTwo() // updtes a to 5
funcThree()  // this time a will be 5 since a was updated
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
 //the first functhree will console a as 0 since the value was just declared 
 //the second functwo will throw an error since you can re-declare a cons
 //the third will never execute


//#3
function funcFour() {
    window.a = "hello";  // creates a global variable in window object 
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()  //will set a the value "hello"
funcFive()  //executes a as hello

//#4
// let a = 1;  
a = 1
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix() //-> inside the funcSix function test 
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
  // nothing because the variable a is declared and initialised inside the function
//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console -> the first alert will console a normally but the second will throw an error since it will try to access the a insied the scope, so it will say that a is not defined 
// #5.2 What will happen if the variable is declared 
// with const instead of let ? nothing will change since both const and let have the same block scoope principale

// exercice 2
// function winBattle(){
//     return true;
// }
let experiencePoints;
const winBattle = () => {
    if (true){
        experiencePoints = 10;
    }else{
        experiencePoints = 1; //there's no need for the this since the condition is always true
    }
    return experiencePoints;
};
console.log(winBattle());
// exercice 3
let input;
const ifstring = input => {
    return typeof input === 'string'
};
console.log(ifstring(23))
// exercice 4
const sum = (a, b) => a + b;
console.log(sum(1, 2))
// exercice 5
let g;
function firstone(g){
    return g / 1000;
}
console.log(firstone(2200))
const secondone = function(g){
    return g / 1000;
}
console.log(secondone(2200))
// the diffrences between declaration and expression, is that declaration can be called before its declaration in the code while the second will throw an error if called before declaration
const lastone = g => g / 1000;
console.log(lastone(7000))
// exercice 6
(function(num, pname, loc, job){
    const story = `You will be a ${job} in ${loc}, and married to ${pname} with ${num} kids.`
    document.body.innerHTML = `<p>story</p>`;
})(3, "Nico", "cosa nostra", "artist")
// exercice 8
const makeJuice = size => {
    let ingredients = [];
    const addIngredients = (fing, sing, ting) =>{
        ingredients.push(fing, sing, ting);
        console.log(sentence)
    };
    const displayJuice = () =>{
        const sentence = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`
        document.body.innerHTML = `<p>sentence</p>`
    }
    addIngredients('limon', 'tfa7', 'b3wid');
    addIngredients('frise', 'dla7', 'swihla');
    displayJuice();
}
makeJuice('large');






