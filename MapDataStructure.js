const map = new Map([
  ["a", 1],
  ["b", 2],
]);
map.set(["c"], [3]);
map.clear();
console.log(map.has("a"));

for (let [key, value] of map) {
  console.log(`${key} : ${value}`);
}
