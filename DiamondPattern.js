let string = "";
let n = 5;
//pyramind
for (let i = 1; i <= n; i++) {
  for (let k = 1; k <= n - i; k++) {
    string += " ";
  }
  for (let j = 0; j < 2 * i - 1; j++) {
    string += "*";
  }
  string += "\n";
}

//reverse Pyramind
for (let i = 0; i < n; i++) {
  for (let k = 0; k < i; k++) {
    string += " ";
  }
  for (let j = 0; j < 2 * (n - i) - 1; j++) {
    string += "*";
  }
  string += "\n";
}

console.log(string);
