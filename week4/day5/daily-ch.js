function areAnagrams(str1, str2){
    const cleanString = str => {
        return str 
            .replace(/\s+/g, '')
            .toLowerCase()
            .split('')
            .sort()
            .join('');
    };
    return cleanString(str1) === cleanString(str2)
}
console.log(areAnagrams('Astronomer', 'Moon starer'));
console.log(areAnagrams('School master', 'The classroom'));
console.log(areAnagrams('Hello', 'World'));