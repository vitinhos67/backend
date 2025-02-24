"use strict";
function prime(number) {
    if (number < 2)
        return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0)
            return false;
    }
    return true;
}
console.log(prime(12));
console.log(prime(7));
console.log(prime(2));
