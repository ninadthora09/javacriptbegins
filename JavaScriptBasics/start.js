// // arrays in javascript
// //  store multiple data values in single varible
// const arr= [1,2,4,5,"ninad",true] // known as the list
// // Unordered colletion
// let len=arr.length;
// for(let i=0;i<len;i++){
//     console.log(arr[i]);
// }
// // array method inbuild basics
// // pop method
// arr.pop() // last element of the array is popped out
// arr.push(100); // pushes from back
// arr.shift(); // pop from start
// arr.unshift(1); // push element at start
// for(let i=0;i<len;i++){
//     console.log(arr[i]);
// }

// //iniatializing the objects
// const person={
//     first_name:"Ninad",
//     last_name:"Thorat",
//     age:21,

//     isHuman:false,
//     fri:["om","bhingri","varad","rohan"],

//     add: {
//         build1:"tinu",
//         build:2,
//     }
// };
// console.log(person.age); //dot method
// // console.log(person);
// console.log(person["age"]); // different type to access the element

// console.log(person.fri);
// console.log(person.add.build1);

// // update the element inside the object through outside
// person.isHuman= true
// console.log(person.isHuman); // it will give true now

// //  add the property to the object now
// person.languages=["Hindi","Marathi","English"];

// console.log(person); // adds to the last of the object
 
// delete person.age;
// console.log(person); // person object age property is deleted

// // loops in js
// // used for repeatative 

// // while loop and do while loop

// // i=1;
// // while(i<=10){ // if it becomes the false it will terminate the loop
// //     console.log(i);
// //     i++;
// // }

// // code will runs at list ones

// // j=0;
// // do{
// //     console.log("Vande mataram");
    
// // }while(j>10);

// // for in loop  bascially used for the objects and arrays
// // const colors ={
// //     prim:"blue",
// //     sec:"red",
// //     ter:"white"
// // };

// // // syntax
// // for(let color in colors){
// //     console.log(color+" "+ colors[color]); //color is the key 
// // }
// // // arrays are also the objects in js

// // const arr1=[100,200,300,400];
// // for(let key in arr1){
// //     console.log(arr1[key]);
// // }

// // for of loop use for array and string used for iterable values

//  this particular loop used for directly accessing the value of the array pr string

// // #1
// let colors=["red","green","Brown"]

// for(let color of colors){
//     console.log(color); // will print the values 
// }

//#2
// method used for taking out the values

// let colors1=["pink","grey","violet"]
// for(let[key,value] of colors1.entries()){
//     console.log(key+" "+value);
// }

// name='Ninad';

// // entries method works for arrays ,sets ,maps/
// for(let letter of name){
//     console.log(letter);
// }

// fat function ()=>{}

    //#1 method
// function greet(a=1,b=2){ // parameters in the functions
//     return a*b;
// }
// let result=greet(2,3);
// console.log(result);

//#2 method anonymous function in js
// it stores the result in variable

// let add= function(a,b){
//     return a*b;
// }
// console.log(add(4,49));

// var sum=add
// console.log(sum(3,4));


// #3 method to declare the function
// fat function in the which is known as the arrow function
//descussed later

// hoisting  important topic of js


// console.log(result(2,5)); // hoisting

// function result(a,b){
//     return a*b;
// }


//when the variable is declared that time in the execition context the variable gets into the memory
// and value assiagned to that variable is undefined 
// example

// console.log(a); // here it will get the value undefined 
// var a="hi";  // if we try to remove this variable from here js will through the error

//  now when we try to do this with the function expression 

// add(3,4); // js will throw the error that add is not the function when it comes under the hoisting
// var add= function(a,b){
//  return a*b;
// }

// function name(){
//     console.log(5+5);
// }
// name("hsello"); // it will print anything is there in the function

//  important thing about the litrals 
// Two object literals are NEVER equal, even if they have the same content.

//let a = { age: 18 };
// let b = { age: 18 };
// console.log(a === b); // false
// console.log)(a==b); //false

// === Strict Equality Operator  Value and Type(checks)
// == Loose Equality Operator    Value only(checks)






// EC6 ECMA script (Most popular version for the js)

 //#1 Need for the let and the const(2 problems with var keyword)

//  *1st variable redeclaration issue what happens as follows
// var a=90;
// var a=45;
// console.log(a); // it will print the a as the 45 value which should not happen
// becasue declearation should not be done that causes the security issue

//*2nd var is not blocked scoped but it is function scoped 

// b=36
// if(b===36){
//     var c= 34;
//     console.log(c);
// }
// console.log(c); // it will print the c value as 34 again security issue 


// function name(){
//     var j=56;
//     console.log(j);
// }
// console.log(j); // it will throw an error which is valid that the variable should be function scoped



//#2 let and const keyword introduction

//*1 let keyword is the solution for the redecleration of the variable

// let a=23;
// let a= 34; // it will not allow that redecleration is not allowed 
// only reassinging is allowed 

//*2 let is blcoked scoped we can't access the varible outside the blocked

// if(true){
//     let a= 90;
//     console.log(a);
// }
// a=95;   // it is allowed reassiging
// console.log(a); // it will tell that a is not defined throws the error

//#3const keyword is the that is the strict 
// it doesn't allow the variable redecleration 
// it doesn't allow the variable reassigning 
// it doesn't allow for accessing outside the scope as well

// const z= "ninad";
// const z="rahul"; it will not allow redecleration
// z= "king";
// console.log(z); it will not allow the reassigning as well
// and can't access from outside the control statment as well as the conditional statments


//#3 arrow function in js

//  normal function is written as 
// function name(){}
// let name1= function(){
// // anonymous function
// }

// arrow fucntion is also known as the fat arrow function
// let name="Ninad";
// let surname="Thorat";
// let func = ()=>console.log(`hello ${surname}`); //1 normal arrow function
// // let func = ()=>{
// // console.log(`hello ${surname}`);
// // } // can be return as this also
// let lastname= a=> console.log(`${a} ${surname}`); //2 parameterized arrow function
// // let lastname= (name)=> console.log(`${name} ${surname}`); can be written like this also
// func();
// lastname(name);

// #4 Template litrals and multiple line strings
 // it is nothing but the backtic very usefull thing in javascript

//  a=21
 // normal concatination is down by this method
//  console.log("Hello my age is "+ a); it will print  age as 21
// or console.log("Hello my age is ", a); same as the above

// now using th backtik
// console.log(`Hello my age ${a}`); it will the print


//#5 Destructing Array very very important in js while learning the backend , frontend or any library of the js
  
//    #1 Destructuring for the arrays
//Destructuring is a shortcut to unpack values from arrays (or objects) 
// into separate variables
// used for the Fixed, small number of values in array 

// let [a,b,c,d]=[1,2,3,4];
// console.log(d); // it will provide the value as the value assinged for it 
// destructuring used for the small number of values in an array

// let [first, ...rest]=  [22,23,24,25,26,27,28,29,30,32]
// console.log(first);
// console.log(rest); // it will come i an array


// for each is the build in fuction inside the js

// const arr=[12,13,14,15,16,17];

// arr.forEach((value)=>{
//         console.log(`${value}`);
// });


//     #2 Destructing in objects in the objects

// here it bit different about the objects

// const myObj={
//     name:"Ninad",
//     age:21,
//     Gender:'M',
//     address:{
//         country:"India",
//         city:"nashik"
//     }
// }
// let{name,age,Gender}= myObj;
// console.log(name); // it will print the name property of the object

// let {name:n, age:a, Gender:g}=myObj; age:a means that assigning other name for it  
// console.log(n); it will print name

// # now destrucuring the child object
//  let{name,age,Gender,address:{country}}=myObj;
//  console.log(country); it will give me the country name
 

// #6 Modules and modularity One of the important Thing 
//  it is in the file called cali which is saved over here