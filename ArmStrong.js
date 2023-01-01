const a = prompt("enter a value");

let n = a.length;
let sum = 0;
let temp = a;

for (i = 1; i <= n; i++) {
  let digit = temp % 10;
  sum += Math.pow(digit, n);
  temp = parseInt(temp / 10);
}
if (sum == a) {
  console.log("it is a armstrong number");
} else {
  console.log("it is not a armstrong number");
}
