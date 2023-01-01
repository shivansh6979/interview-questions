function countKeys(obj) {
  let size = 0;
  let k = Object.keys(obj);

  for (let i = 0; i < k.length; i++) {
    size++;
  }
  return size;
}
let object = {
  id: 1,
  name: "shivansh",
  Age: 22,
  course: "B.tech",
  city: "gorakhpur",
};

var count = countKeys(object);
console.log(count);
