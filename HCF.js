const a = prompt("Enter the first integer");
const b = prompt("Enter the second integer");

let hcf;

for (i = 0; i < a && i < b; i++) {
  if (a % i == 0 && b % i == 0) {
    hcf = i;
  }
}
console.log(`H.C.F of two numbers ${hcf}`);
