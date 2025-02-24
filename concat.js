"use strict";
function concatArray(...receiveArray) {
    return receiveArray.reduce((acc, val) => acc.concat(val), []);
}
console.log(concatArray([1, 2343], [45, 78]));
