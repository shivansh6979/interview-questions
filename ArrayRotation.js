function rotateRight(arr, n) {
  if (n < 1) {
    return arr;
  }

  for (let i = 0; i < n; i++) {
    let element = arr.pop();
    arr.unshift(element);
  }
  return arr;
}

var result = rotateRight([1, 2, 3, 4, 5], 2);
console.log(result);
