let string = "";
let n = 5;
//for rows
for (let i = 1; i <= n; i++) {
  // for printing spaces
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
