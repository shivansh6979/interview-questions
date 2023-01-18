let M_weight = parseInt(prompt("Enter a Mark's weight"));
let M_height = parseInt(prompt("Enter a mark height"));
let J_weight = parseInt(prompt("Enter a john weight"));
let J_height = parseInt(prompt("Enter a john height"));

let J_BMI = J_weight / J_height ** 2;
let M_BMI = M_weight / M_height ** 2;

let markHigherBMI = true;

if (J_BMI > M_BMI) {
  console.log("John has higher bmi");
  markHigherBMI = false;
  console.log("Boolean", markHigherBMI);
} else {
  console.log("Mark has higher BMI");
}
