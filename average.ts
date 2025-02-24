function avarage(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
}

console.log(avarage([1, 2, 3, 4, 5]));
console.log(avarage([2, 2]));