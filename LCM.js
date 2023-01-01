const a = prompt("Enter the 1st no.");
const b = prompt("Enter the 2nd no.");

let min = a > b ? b : a;

while (true) {
  if (min % a === 0 && min % b === 0) {
    console.log(`L.C.M is ${min}`);
    break;
  }
  min++;
}
