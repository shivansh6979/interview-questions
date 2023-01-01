let Arr = [];
let arr = [1, 2, 3, 4, 5, 6];

for (let i = 0, flag = false; i < arr.length; i++) {
  if (arr[i] === 4) {
    flag = true;
    continue;
  }
  if (flag) {
    Arr[i - 1] = arr[i];
  } else {
    Arr[i] = arr[i];
  }
}
document.write(Arr);
