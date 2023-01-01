const arr1 = [1, 2, 5, 7];

function average(array) {
  let min = array[0];
  let max = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }
  let average = (min + max) / 2;
  return average;
}

console.log("Average", average(arr1));
