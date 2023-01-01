let n = parseInt(prompt("Enter the no."));
let isPrime = true;

if (n === 1) {
  console.log("1 is neither prime nor composite");
} else if (n > 1) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${n} is prime no.`);
  } else {
    console.log(`${n} is not a prime no.`);
  }
}
// number less than -1
else {
  console.log(`${n} is not a prime no.`);
}
