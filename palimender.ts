function palimender(str: string) {
    let strToLower = str.toLowerCase();
    strToLower = strToLower.split('').reverse().join('');
    return strToLower === str.toLowerCase();
}

console.log('sou um gordinho gosotso');
console.log(palimender('arara'));