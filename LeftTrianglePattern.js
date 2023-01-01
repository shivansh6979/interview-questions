let string = "";
let n = 5;

for (let i = 1; i <= n; i++) {
  //for printing stars
  for (let k = 0; k < i; k++) {
    string += "*";
  }

  //for Spaces
  for (let j = 0; j < n - 1; j++) {
    string += " ";
  }
  string += "\n";
}

console.log(string);
