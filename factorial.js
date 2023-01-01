const a = prompt("enter the no.");

if (a < 0) {
  console.log("Cant find the factorial of the given no.");
} else if (a === 0) {
  console.log("factorial = 1");
} else if (a > 1) {
  let fact = 1;
  for (let i = 1; i <= a; i++) {
    fact *= i;
  }
  console.log(fact);
}
