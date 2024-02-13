//create strings 

var firstName = "Tina"
var lastName = "Rai"

//ESCAPING LITERAL QUOTES IN A STRING
//var myStr = "I am learning "Javascript" today"

var myStr = "I am learning \"Javascript\" today!"
console.log(myStr)

//QUOTING STRINGS WITH SINGLE QUOTES 
var myStr = 'I am learning "Javascript" today!'
console.log(myStr)

//ESCAPING SEQUENCES 

/*
Code     Output 
\'       single quote
\"       double quote
\\       backslash
\n       newline
\r       carriage return
\t       tab
\b       backspace
\f       form feed
*/

//examples 

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
console.log(myStr)


//concatenating strings 

///Example
var ourStr = "I am"+" "+"studying for exams" + "."


//try here 
var myStr;

//concantenating strings with plus equals operator

//examples 
var ourStr = "I come first."
ourStr += "I come second."

//try here 
var myStr;

//CONCATENATE STRING WITH VARIABLE

//example
var ourName = "John";
var ourStr = "My name is " + ourName + ", how are you ?"

//try here
var myName;
var myStr;

//APPENDING VARIABLES TO STRINGS 
//Example
var anAdjective = "awesome!";
var ourStr = "Coding is ";

ourStr += anAdjective;
console.log(ourStr)

//Try Here
var someAdjective;
var myStr;

//FIND LENGTH OF STRING




