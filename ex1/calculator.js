const args = process.argv.slice(2);

if (args.length !== 3) {
    console.log("Correct usage: node {{path}} <operation> <num1> <num2>");
    process.exit(1);
}

const [operation, num1, num2] = args;
const number1 = Number(num1);
const number2 = Number(num2);

if (isNaN(number1) || isNaN(number2)) {
    console.log("Error: Provided values must be numbers.");
    process.exit(1);
}

switch (operation) {
    case "add":
        console.log(`Result: ${number1 + number2}`);
        break;
    case "sub":
        console.log(`Result: ${number1 - number2}`);
        break;
    case "mult":
        console.log(`Result: ${number1 * number2}`);
        break;
    case "div":
        if (number2 === 0) {
            console.log("Error: Division by zero is not allowed.");
            process.exit(1);
        }
        console.log(`Result: ${number1 / number2}`);
        break;
    default:
        console.log("Error: Invalid operation. Use add, sub, mult, or div.");
        process.exit(1);
}
