function productOfRest(arr, n) {
  let product = [];
  for (let i = 0; i < n; i++) {
    let prodExclude = 1;
    for (let j = 0; j < n; j++) {
      if (i === j) {
        continue;
      }
      prodExclude = prodExclude * arr[j];
    }
    product[i] = prodExclude;
  }
  return product;
}
let array = [1, 2, 3, 4, 5, 6];
let n = array.length;
let result = productOfRest(array, n);
console.log(result);
