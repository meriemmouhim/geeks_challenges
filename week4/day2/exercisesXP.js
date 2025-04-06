// exercise 1
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}`)
});
const isthere = colors.some(color => color === "Violet")
if (isthere){
    console.log("yea")
}else{
    console.log("no")
}


// exercise 2
const coloors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinals = ["th", "st", "nd", "rd"];
coloors.forEach((coloor, index) => {
    let position = index + 1;
    let suffix;
    if((position % 10) >= 11 && (position % 100) <= 13){
        suffix = "th";
    }else{
        suffix = ordinals[position % 10] || "th";
    };
    console.log(`${position}${suffix} choice is ${coloor}`);
});


// exercise 3
//------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);  //--> ["bread", "carrot", "potato", "chicken", "apple", "orange"]

//------2------
const country = "USA";
console.log([...country]); //--> ["U", "S", "A"]

//------Bonus------
let newArray = [...[,,]];
console.log(newArray); //--> [undefined, undefined]


// exercise 4
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
const welcome_students = users.map(user => `hello ${user.firstName}`);
console.log(welcome_students);
const fullstack_resident = users.filter(user => user.role === "Full Stack Resident");
console.log(fullstack_resident);
const resident_lname = users
    .filter(user => user.role === "Full Stack Resident")
    .map(user => user.lastName)
console.log(resident_lname);


// exercise 5
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const combined = epic.reduce((acc, word) => acc + word + ' ');
console.log(combined);


// exercise 6
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}];
const passedStudents = students.filter(student => student.isPassed === true);
console.log(passedStudents);
// chained one
const chained = students
    .filter(student => student.isPassed === true)
    .forEach(student => {
        console.log(`${student.name}, congrats you've passed`);
    });
console.log(chained);









