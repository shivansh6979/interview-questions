function RemoveDuplicatesFromAnArray(arr) {
  let uniqueArr = [];
  for (let i of arr) {
    if (uniqueArr.indexOf(i) === -1) {
      uniqueArr.push(i);
    }
  }
  return uniqueArr;
}

let array = [1, 1, 2, 3, 4, 4, 5, 5];
let result = RemoveDuplicatesFromAnArray(array);
console.log(result);
