let string = "";
let n = 5;

for (let i = 1; i <= n; i++) {
  for (let j = 0; j <= n - i; j++) {
    string += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    string += `${i}`;
  }
  string += "\n";
}
//reverse
for (let i = 0; i <= n; i++) {
  for (let j = 0; j <= i; j++) {
    string += " ";
  }
  for (let k = 0; k < 2 * (n - i) - 1; k++) {
    string += `${i}`;
  }

  string += "\n";
}
console.log(string);
