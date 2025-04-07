// 1st daily challenge (whyyyyyyy (╯°□°）╯???)
function makeAllCaps(words){
    return new Promise((resolve, reject) => {
        const allstrings = words.every(word => typeof word === 'string');
        if(allstrings){
            const uppercased = words.map(word => word.toUpperCase());
            resolve(uppercased);
        }else{
            reject("array contains non sting elements");
        }
    });
}

function sortWords(words){
    return new Promise((resolve, reject) => {
        if (words.length > 4){
            const sprted = [...words].sort();
            resolve(sorted);
        }else{
            reject("array length must be greater than 4");
        }
    });
}

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))



// 2nd daily challenge (it's okay tho :D)
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
}`

function toJs(){
    return new Promise((resolve, reject) => {
        try {
            const morseOBj = JSON.parse(morse);
            if (Object.keys(morseObj).length === 0){
                reject("morse javascript object is empty");
            }else{
                resolve(morseObj);
            };
        }catch (e){
            reject("error parsing morse JSON")
        }
    });
}

function toMorse(morseJS){
    return new Promise((resolve, reject) => {
        const userinput = prompt("enter a word or sentence").toLocaleLowerCase();
        const invalidchars = [];
        const translation = [];
        for (const char of userinput){
            if (morseJS[char]){
                translation.push(morseJS[char]);
            }else if (char === " "){
                
            }else{
                invalidchars.push(char);
            }
        }
        if(invalidchars.length > 0){
            reject(`these characters are not in the morse code: ${invalidchars.join(", ")}`);
        }else{
            resolve(translation);
        }
    });
}
function joinWords(morseTranslation){
    const morsesting = morseTranslation.join("\n");
    const div = document.createElement("div");
    div.textContent = morsesting;
    document.body.appendChild(div);
    return morsesting;
};

toJs()
  .then(morseObj => toMorse(morseObj))
  .then(morseTranslation => joinWords(morseTranslation))
  .then(result => console.log(result))
  .catch(error => console.error(error));












