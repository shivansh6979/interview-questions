const string = prompt("Enter the String");
function reverseString(string) {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

console.log("Reversed String", reverseString(string));
