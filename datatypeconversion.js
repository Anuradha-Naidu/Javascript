
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


//number to string 
const score5 = 33

console.log(score5);
console.log(typeof score5);

let valueInNumber6 = String(score5)
console.log(typeof valueInNumber6);

//suffix prefix 
let x1 = 3;
const y1 = x1++;
// x1 is 4; y1 is 3

let x2 = 3;
const y2 = ++x2;
// x2 is 4; y2 is 4