var a = "This is a string ";
var b = "This is another string";
var password = "string";

// combines the above string a and b and prints into the console
var combinedString = a + b;
console.log(combinedString);
// checks the index of the letter of the string
console.log(a.indexOf("h"));

console.log(a.substr(3,4));
// checks whether these values belong to the string exactly
console.log(a.includes("Narullah"));
console.log(a.includes("string"));
console.log(a.includes(password));
// types of numbers
var myNumber = 5;
var myDecimal = 5.5;
var myExponential = 123e5;
// basic maths operations
console.log(myNumber + 3);
console.log(myNumber - 3);
console.log(myNumber * 3);
console.log(myNumber / 3);
// checks whether the number is finite and converts the number to a string
console.log(Number.isFinite(myNumber));
console.log(myNumber.toString());
// boolean values in javascript
var myBoolean = true;
myBoolean = false;
console.log(myBoolean);
//creates an array and gets the fourth value back because myArray.length = 5 -1 = 4
myArray = [1,2,3,"b","a"];
console.log(myArray[myArray.length -1]);
// Joining arrays together
var join = myArray + [" onething", "anotherthing"];
console.log(join);
console.log(typeof join);

myArray.push("where should i go");
console.log(myArray);

console.log(myArray.pop());
console.log(myArray);
console.log(myArray.reverse());
// use dots to access nested values in a object in js
var object = {
  one: "one is a string",
  two: ["is an object"],
  three: {
    nested: "This is a nested object"
  }
}
console.log(object.three.nested);

var myString = "5";
var myDecimalString = "2.5"
var myNumber = 3;

// change string to interger
console.log( parseInt(myString) + myNumber );
// change string to decimal (floar)
console.log( parseFloat(myDecimalString) + myNumber) ;
// change decimal to interger (remove the point)
console.log( parseInt(myDecimalString) + myNumber);
