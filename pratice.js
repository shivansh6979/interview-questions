function reverse(str) {
  let string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    string += str[i];
  }
  return string;
}
const input = prompt("enter the string");
console.log("entered string", input);

const reversed = reverse(input);

console.log("Reversed String", reversed);
