// let fruit = "apple";

// switch (fruit) {
//   case "banana":
//     console.log("i love eating banana")
//     break
//     case "orange":
//       console.log("i love eating orange");
//       break
//       case "mango":
//         console.log("i love eating mango");
//         break
//         default:
//         console.log("unknown fruit")
// }

// let age = "18";
// let canVote = (age >= 18) ? "Yes you can vote" : "No you cant vote"
// console.log(canVote);




  
  
  
// Function*********************************************************************************
  // JS function: it is a block of code design to perform a certain task
// Types of function:

// function declaration: creates a named function to start it.

// function functionName(){}

// eg:
// function greet(name){
//   console.log("hello", "+name + ");
//   }
 

  // Function expression: when you store a function in a variable

  // const functionName = function() {}

  // const functinName = function(){}


  
  // Arrow function(es6): provide more concise syntax to handle this key word differently compared to regular function 
  const add = (a,b) => {
    return a+b
 }
  console.log(add(5,4));
  

  // parameter are variable define in the function .
  // argument are values passed to the function when its called.

  // Function declaration eg:
function sayHi(name){
  console.log(`hello ${name}`);
  
}
sayHi("chapo")
sayHi("soliu")
sayHi("atew")

//Arrow examples

const cohorts = (tutor,student) => {
  const tutor1 = "jagun"
  const tutor2 = "lai"
  const student1 = "musa"
  const student2 = "audu"
  return console.log(`Mr. ${tutor1} is the tutor of the year, while Mr. ${student2} is part of the cohorts`);

}
cohorts()


const tester = ()=> {
  console.log(3+5)
  
  
}
tester()

const ball = (a,b)=> {
  console.log(`${5+3}`);
  
}
ball()

const boy = () => {
  console.log("goat");
  
}
boy()

const logAge = (name,age) =>{
  console.log(`${name} is ${age} years old.`);
  

}
logAge("joe",35)

const select =() => {
  const sentence = console.log("i love guns")
  return sentence
  
  
}
select()

let name2= "bebo" 

const logName =() =>{
  console.log(name2)
  

  
}
logName()
















// JS function : a block of codes designed to perform certain tasks, it is executed when it is called or invoked.

// function name() {
//   statement;
// }
// Types of functions:

// Function declaration:

//  function multiply(number){   //with parameter
//   return number*number
  
//  }
//  const result = multiply(5);
//  console.log(result);
 

function sum() {       //no parameter
  return 9+5
}
console.log(sum())

function sumUp(){
  return 5+6
}
console.log(sumUp());

function mulResult(){
  return 5%2
}
console.log(mulResult());

function subResults (){
  return 5-3
}

console.log(subResults());

function dice(){
  return 5/2
}
console.log(dice());





function subtraction(a,b) {    //function declaration with two parameters
  return a-b;
}
const subResult = subtraction(5,4);
console.log(subResult);

// assinging value to param

function division (c, d=7){
  return c/d;

}
console.log(division(21));

function yoyo(){
  return 4/2
}
console.log(yoyo());


function soreResult() {
  return 9-6
  
}
console.log(soreResult());





// Function Expression*********************************************
const greeting = function sayHi(name){
  console.log(`Hello ${name}`);
  
}
greeting("teddy")

//example
const addition= function sum(){
  console.log(` ${2+5}`);
  
}
addition ()

// const add= function sum(a,d){
//   console.log(`${5+4}`);
  
// }
// add()

const user= function guess(name){
  console.log(`${name}`);
  
}
user("bayo")

const number = function(b,d){
  console.log(`${5+3}`);
  
}
number()


const fuck = function milf(name) {
  console.log(`${name}`);
  
}
fuck("rita")



// Example
const road = function express(w,i){
  console.log(`you are a boy ${8/2}`);
  
}
road()

// const roof = function escape()


//example
const testing = function sum(number){
  return number + number
}
console.log(testing(6))


//Arrow Function

const arrow = (x) => x*x;
console.log(arrow(4));

const example2 = (tutor, student) =>{
  const tutor1 = "OG";
  const tutor2 = "Teddy"

  const student1 = "Mubi";
  const student2 = "Rodi";

  return console.log(`Mr ${tutor2} is the tutor, while ${student1} is the gate-man`)

  
};
example2()





// function declaration
function opay(){
  return 4+7
}
console.log(opay());

function obay (){
}
console.log("tommy");

// Function expression

const yoyob = function egg(w,i){
  console.log(`${5+3}`);
  
}
yoyob()

//Function expression

const boye = function girl(name){
 console.log(`${name}`);
 
}
boye("temi")

const voto = function rido(a,b){
  console.log(`${5+5}`);
  
}
voto()


// arrow

const toto = (namer) => {
  console.log(namer);
  
}
toto("yoni")

const robo = (u,o,r) =>{
  console.log(`${4+5+3}`);
  
}
robo()