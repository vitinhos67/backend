const args = process.argv.slice(2);
const numero1 = Number(args[0]);
const numero2 = Number(args[1]);

const resultado = numero1 + numero2;
console.log(`Soma: ${resultado}`);