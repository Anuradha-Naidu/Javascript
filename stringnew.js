
const name = "Sam"; 
const repoCount = 50;

//console.log(name + repoCount + '!'); //old way 

//modern syntax : 
//string interpolation : backticks

//onsole.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const firstName = new String("Sam") 

//console.log(firstName[0]);

//constructor

//to access prototype

console.log(firstName.__proto__);
/*
console.log(firstName.length);
console.log(firstName.toUpperCase());
console.log(firstName.charAt(3));
console.log(firstName.indexOf('o'));
*/

const newString = firstName.substring(-2,4); //starts with 0 Index
//console.log(newString);

const anotherString = firstName.slice(-5,4); //allows negatives
//console.log(anotherString); 

//trim 
const newStringOne = "   Hitesh  ";
//console.log(newStringOne);
//console.log(newStringOne.trim());

//console.log(firstName.splice(1,2));

//replace 
const url = "https://sam.com/sam%20sony"
//console.log(url.replace('%20','-'));

//includes

//console.log(url.includes('pam'));

//how to convert string to array

//split method 
const movieName = new String("New-Year");
//console.log(movieName.split('-'));   // split('separator', 'limit')
