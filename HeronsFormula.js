const n1 = parseInt(prompt("enter the first side"));
const n2 = parseInt(prompt("enter the second side"));
const n3 = parseInt(prompt("enter the third side"));

const s = (n1 + n2 + n3) / 2;

const area = Math.sqrt(s * (s - n1) * (s - n2) * (s - n3));

console.log("AREA", area);
