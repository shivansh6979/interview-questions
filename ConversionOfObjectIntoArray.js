//object
let obj = {
  id: "12",
  name: "shivansh",
  age: 22,
};

// converting keys into array
let k = Object.keys(obj);
console.log(k);

//converting values into array
let v = Object.values(obj);
console.log(v);
//converting both values and keys into an array
let e = Object.entries(obj);
console.log(e);
