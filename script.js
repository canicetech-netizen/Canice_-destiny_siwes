// Multiplication table generator
const number = 5;

console.log(`--- Multiplication Table for ${number} ---`);

for (let i = 1; i <= 12; i++) {
    let result = number * i;
    console.log(`${number} x ${i} = ${result}`);
}
