let string = "";
let n = 5;

for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    if (i === n) {
      string += "*";
    } else {
      if (j === 0 || j === i - 1) {
        string += "*";
      } else {
        string += " ";
      }
    }
  }
  string += "\n";
}
console.log(string);
