// declaring the variables of the string
const name= "Ninad";
const gameName= new String("My name is Ninad")
// should be run in browser
console.log(gameName.length); // 16
console.log(gameName.toUpperCase()); // converts to upper case
console.log(gameName.indexOf('i')); // 8
console.log(gameName.charAt(1)); // y
console.log(gameName.substring(0,7));//slicing
console.log(gameName.slice(0,13)); 

// "   ninad   "  (trim) 
const userName="   ninad   ";
console.log(userName);        //     ninad     //
console.log(userName.trim()); // ninad

// this for the replace
const url ="https://ninad.com/Ninad%20thorat";
console.log(url.replace('%20','-'));// replacing
console.log(url.includes("king")); //false
console.log(url.includes("ninad")); //true

//converting the string to array

const name1="Rahul the only king";
console.log(name1.split(" ",3)); 
console.log(name1.split("")); //splits the characters
console.log(name1.split(" ")); //name1.split(selector,limit);
 


const repoCount=10;
console.log(gameName);

//modern (backticks) string interpolation

console.log(`hello my name is ${3} and i live in jungle`);
// injecting the variable inside the string

