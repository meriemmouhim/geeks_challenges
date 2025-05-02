import { japaneseRaceCars } from './products.js';

function getCarByName(carname){
    return japaneseRaceCars.find(car =>
        car.name.toUpperCase() === carname.toUpperCase()
    ) || null ;
};
console.log(getCarByName("Nissan Skyline GT-R R34"));
console.log(getCarByName('Mazda MX-5 Miata (NA)'));