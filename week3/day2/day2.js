// ex 1 / part 1
const people = ["Greg", "Mary", "Devon", "James"]
const shifttedpeople = people.shift()
let jamesindex = people.indexOf("James")
if (jamesindex !== -1) {
    people[jamesindex] = "Jason"
}
people.push("meriem")
console.log(people.indexOf("Mary"))
console.log(people)
const newpeople = people.slice(1, people.length - 1)
console.log(newpeople)
console.log(people.indexOf("Foo"))    //indexoff() return -1 if the element is missing
// part 2
// for( let i in people){
//     console.log(people[i])
// }
for( let i in people){
    if(people[i] === "Devon"){
        break
    }
    console.log(people[i])
}
// ex 2
let colors = ["Blue", "Green", "Red", "Pink", "Orange", "Violet", "Indigo", "Yellow"]
// for (let i in colors){
//     if(colors[i] === "Blue"){
//         console.log("Blue is my favorite color")
//     }else if (colors[i] === "Pink"){
//         console.log("Pink is my second favorite color")
//     }
// }
const favorite = {
    "Blue": 1,
    "Pink": 2
}
function suffix(rank){
    if(rank === 1) return "st";
    if(rank === 2) return "nd";
    return "th";
}
for (let color of colors){
    if(favorite[color]){
        let rank = favorite[color];
        console.log(`${color} is my ${rank}${suffix(rank)} favorite color`)
    }else{
        console.log(`${color} isn't my favorite color`)
    }
}
// ex 3
let num;
do{
    num = Number(prompt("Enter a number: "))
    if(isNaN(num)){
        console.log("Invalid input");
        continue;
    }
    if (num < 10){
        console.log("small number")
    }
} while (insNan(num) || num < 10)
console.log("your number is: ${num}")
// ex 4
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log(building.numberOfFloors)
console.log(building.numberOfAptByFloor.firstFloor)
console.log(building.nameOfTenants[1])
console.log(building.numberOfRoomsAndRent.dan[0])
const sarahrent = building.numberOfRoomsAndRent.sarah[1]
const davidrent = building.numberOfRoomsAndRent.david[1]
if(sarahrent + davidrent > building.numberOfRoomsAndRent.dan[1]){
    building.numberOfRoomsAndRent.dan[1] = 1200;
    building.numberOfRoomsAndRent.dan[1] = 1200
}else{
    console.log("no rent increase needed")
}
// ex 5
const family = {
    familyName: "Griffin",
    members: 6,
    location: "Quahog, Rhode Island",
    isLarge: true,
}
for(let key in family){
    console.log(key)
}
for(let key in family){
    console.log(family[key])
}
// ex 6
let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
let sentence = ''
for(let key in details){
    sentence += key + " " + details[key] + " "
}
console.log(sentence)
// ex 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const firstletter = names.map(name => name[0])
const sortedletters = firstletter.sort()
console.log(sortedletters.join(''))