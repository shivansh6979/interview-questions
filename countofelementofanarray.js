let arr1 = [1, 2, 6, 1, 1, 1];

function count(array) {
  let sum = 0;
  let n = array.length;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let avg = sum / n;
  let count = 0;

  for (let j = 0; j < array.length; j++) {
    if (array[j] === avg) {
      count = count + 1;
    }
  }
  return count;
}

console.log("No. of Elements", count(arr1));
