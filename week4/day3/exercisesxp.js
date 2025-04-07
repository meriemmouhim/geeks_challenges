// exercise 1
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
//I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


// exercise 2
function displayStudentInfo(objUser){
    //destructuring
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});
console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));

//exercise 3
const users = { user1: 18273, user2: 92833, user3: 90315 }
const arrayusers = object.entries(users);
console.log(arrayusers);
const modified = arrayusers.map(([user, id]) => [user, id * 2]);
console.log(modified);

//exercise 4
class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member); // --> "object"

//exercise 5
class Dog {
    constructor(name) {
      this.name = name;
    }
  };
  // 2  'cause it proparly calls supe(name) ot initialise the parent class before setting it's own property (size)
  class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };

//exercise 6
// [2] === [2]  --> false
// {} === {}  --> false
// each one creates a new object/array in memory, so they aren't the same object/array even if they have the same value
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number) //4 --> same as object1
console.log(object3.number) //4 --> same as object1
console.log(object4.number) //5 --> different object
class Animal {
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color = color;
    }
  }
  class Mammal extends Animal {
    sound(animalSound) {
      return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
  }
  const farmerCow = new Mammal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("Moooo"));






