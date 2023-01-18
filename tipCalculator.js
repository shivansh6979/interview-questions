let bill = parseInt(prompt("Enter the bill value"));
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
let total = bill + tip;

console.log(
  `The bill was ${bill} , the Tip was ${tip}, and the final value was ${total}`
);
