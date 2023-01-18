var twoSum = function (nums, target) {
  let indices = [];
  for (let i = 0; i < nums.length; i++) {
    console.log(nums.length);
    console.log(target);
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        if (indices.indexOf(i) === -1) {
          indices.push(i);

          indices.push(j);
        }

        break;
      }
    }
  }
  return indices;
};
console.log("bfhbj");
const result = twoSum([2, 7, 11, 15], 9);
console.log("result", result);
