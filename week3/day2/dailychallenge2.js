// method 1
let n;
for(n=1 ; n<=6 ; n++){
    console.log("*".repeat(n))
}
// method 2
let i;
let j;
for(i=1 ;i<=7 ; i++){
    let str = "";
    for(j=1 ; j<+i ; j++){
        str += "*"
    }
    console.log(str)
}
