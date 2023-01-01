const a = prompt("Enter the max value of the limit");
const b = prompt("Enter the min. value of the limit");

const random = Math.random() * (a - b) + b;
console.log("Generated Number", random);
