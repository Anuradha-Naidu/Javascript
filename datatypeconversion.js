
//number
const score = 90

console.log(score);
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

//string

const score1 = "90abc"

console.log(score1);
console.log(typeof score1);

let valueInNumber2 = Number(score1)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

//null
const score2 = null

console.log(score2);
console.log(typeof score2); //null is object datatype

let valueInNumber3 = Number(score2)
console.log(typeof valueInNumber3);
console.log(valueInNumber3); // null is 0

//undefined
const score3 = undefined

console.log(score3);
console.log(typeof score3); //undefined is undefined datatype only

let valueInNumber4 = Number(score3)
console.log(typeof valueInNumber4);
console.log(valueInNumber4); // undefined is NaN



//boolean true/false
const score4 = false;

console.log(score4);
console.log(typeof score4); // true-false is boolean

let valueInNumber5 = Number(score4)
console.log(typeof valueInNumber5);
console.log(valueInNumber5); // true =1, false = 0

