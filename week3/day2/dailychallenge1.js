let sentence = "the movie is not that bad it was good"
let wordNOt = sentence.indexOf("not")
let wordBad = sentence.indexOf("bad")
if (wordNOt !== -1 && wordBad !== -1 && wordNOt < wordBad){  //the -1 for when one of the words is missing
    let endP = wordBad + 3 //for the full lenght of th word
    let newSentence = sentence.slice(0, wordNOt) + "good!" + sentence.slice(endP)
    console.log(newSentence)
}else{
    console.log(sentence)
}