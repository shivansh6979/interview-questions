let a = "moon";
let b = "noom";

function Anagram(x, y) {
  let m = x.toLowerCase();
  let n = y.toLowerCase();

  m = x.split("").sort().join("");
  n = y.split("").sort().join("");

  return m === n;
}
let result = Anagram(a, b);
console.log(result);
