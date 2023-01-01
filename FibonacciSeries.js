const n = prompt("Enter upto which term you want to print the series");

let n1 = 0,
  n2 = 1,
  nextTerm;

for (i = 0; i < n; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}
