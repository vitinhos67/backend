function concatArray<T>(...receiveArray: T[][]): T[] {
    return receiveArray.reduce((acc, val) => acc.concat(val), []);
}

console.log(concatArray([1, 2343], [45, 78]));
