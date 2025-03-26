// ex 1
const displayNumbersDivisible = (divisor = 23) => {
    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            console.log(i);
        }
    }
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            sum += i;
        }
    }
    console.log(sum);
}
displayNumbersDivisible(50)
// ex 2
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}
const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}
const shoppingList = ["banana", "orange", "apple"]
const myBill = () => {
    let total = 0
    for(const item of shoppingList){
        if(item in stock && stock[item] > 0){
            total += prices[item]
            stock[item]--
            console.log(`${item} added to bill. Remaining stock: ${stock[item]}`);
        }else{
            console.log(`${item} is out of stock`);
        }
    }
    return total;
}
const totalBill = myBill();
console.log(`Total: $${totalBill.toFixed(2)}`);
// ex 3
const changeEnough = (itemPrice, amountOfChange) => {
    const srf = [0.25, 0.10, 0.05, 0.01];
    let ljam3 = 0;
    for(let i = 0; i < amountOfChange.length; i++){
        ljam3 += amountOfChange[i] * srf[i];
    }
    return ljam3 <= itemPrice;
}
console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(10.50, [10, 10, 10, 10]));
// ex 4
const hotelCost = (nights) => {
    while (isNaN(nights) || nights === "" || nights === null){
        nights = prompt("Invalid input, chhal bghiti tb9a 3dna (dyafa 7dha 3yam)?");
    }
    return 140 * Number(nights);
}
const planeRideCost = (destination) => {
    while(typeof (destination) !== "string" || destination.trim() === "" || !isNaN(destination)){
        destination = prompt("Invalid input, chhal bghiti tb9a 3dna (destination)?");
    }
    switch (destination.toLowerCase()){
        case "london": return 183;
        case "paris": return 220;
        default: return 300;
    }
}
const rentalCarCost = (days) => {
    while(isNaN(days) || days === "" || days === null){
        days = prompt("Invalid input, chhal bghiti tonobila mn nhar?");
    }
    const rateTnhar = 40;
    let total = rateTnhar * Number(days);
    return days >= 10 ? total * 0.95 : total;
}
const totalVacationCost = () => {
    const lyali = prompt("Chhal bghiti tb9a 3dna (lyali)?");
    const destination = prompt("Fin baghi tnmxi?");
    const nharat = prompt("Chhal bghiti tonobila mn nhar?");
    const hotel = hotelCost(lyali);
    const tyara = planeRideCost(destination);
    const tonobila = rentalCarCost(nharat);
    const total = hotel + tyara + tonobila;

    console.log(`Hotel cost: $${hotel}`);
    console.log(`Plane tickets cost: $${tyara}`);
    console.log(`Car rental cost: $${tonobila}`);
    console.log(`Total vacation cost: $${total.toFixed(2)}`);
    return total;
}
totalVacationCost();