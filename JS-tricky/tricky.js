//Global Scope: when the variable is declared at the top

const scope = 2;

const testScope = () => {
  const b = 10
  console.log(scope+ b)
  
}
testScope();

let num = 5;
const testNum = () => {
  console.log(num)
  num= 10
  
}
testNum()
console.log(num)


// Local Scope: this is when variable is declared within a function

function localScope(){
  const name = "OG"
  const isPresent = true;
  const potBellied = true;

  console.log(name,isPresent, potBellied);
  
}
localScope()



const someFunction = () => {
  const name = "yemi";

  const anotherFunction = (a) => {
    console.log(name);
    return a*a;
  };
  console.log(anotherFunction(5));
  
};
someFunction()

//Hoisting
hoistedFunction()

function hoistedFunction(){
  console.log("i am hoisted");
  
}





//Closure:
// it is a variable that remembers its variable from its outer scope, even after  the outer function as return this concept allows the inner function to have access to the variables of outer function even after the outer function has finished execution.



const outer = () =>{
  const outerVar = "hello"
  const inner = () => {
    const innerVar = "messi"
    console.log(outerVar,innerVar);
    
  }
  return inner()
  
}
outer()


const innit = () =>{
  const hobby= "hiking"
 const displayHobby = () =>{
 const person = "doo"
 console.log(hobby,person);
 
 }
  return displayHobby()
}
innit()

const innita = () => {
  const hobbie= "jumping"
  const displayHobbie =() =>{
    console.log(hobbie);
    
  }
  return displayHobbie
}
const answer= innita()
answer()


function checkMate(){
let name = "chapo"
console.log(`outer function is for ${name}`)

function checking (){
  console.log(`the user is ${name}`);
  
}
return checkMate
}
// const ball = checkMate()
checkMate()

console.log(2+'2');

const outerFn = ()=>{
 const example = "I am a dragon rider"
 console.log(example);

 const innerFn =() =>{
  console.log("i am inner function");

  const nestedInnerFn2 = () =>{
    console.log("i am nested inner function");
    
  }
  return nestedInnerFn2()
  
 }
 return innerFn()
 
}
outerFn()


// Sring in Details 

// Example1

const single =  'This is a string written inside a of single quote '
console.log(single);

const double =  "This is a string written inside a of double quote "
console.log(double);

const backticks = `This is a string written inside a of backticks quote`
console.log(backticks);


// Example 2

const single1 = '${2+2}'
console.log(single1);

const double1 = "${2+2}"
console.log(double1);

const backticks1 = `${2+2}`
console.log(backticks1);


// String inside string
// Example3

const greetings= "Hi, im jonny i just come lagos"
console.log(greetings);

const greeting1= `Hi, im jonny i just come "lagos"`
console.log(greeting1);


// Escape character
const greeting2 = 'Hi, I\'m Chapo but people call me \'Chapo-money'
console.log(greeting2);

//String Length

// Example 6
// Return the length of string
const name9 = "Emmanuel Chapo, Audu wasiu"
console.log(name9.length);

// Using Position of CHAR
// Example7

const firstLetter = name9[8]
console.log(firstLetter);

const lastLetter = name9[name9.length-20]
console.log(lastLetter);

// Change String case
// Example8

const mixedStringCase = "Hello, how are you?"
const lowerCase = mixedStringCase.toLowerCase()
console.log(lowerCase);

const upperCase = mixedStringCase.toUpperCase()
console.log(upperCase);


// Searching for a string
// Example

const exampleStr = "I love cat, he said, cat are great!";
console.log(exampleStr.indexOf("I"));
console.log(exampleStr.indexOf("dog"));

// LASTINDEXOF

const sentence = "I am hungry, I need to eat good food";
const lastIndexOf = sentence.lastIndexOf("eat")
console.log(lastIndexOf);

const text = "javascript is a powerful the language"
const index = text.lastIndexOf("powerful")
console.log(lastIndexOf);

// STARTSWITH
const str1 = 'Saturday night plans';
console.log(str1.startsWith('Sat'));

//ENDSWITH
const str = 'Cats are the best!';
console.log(str.endsWith('best!'));

//TRIM
const greet = '   Hello world!';
console.log(greet.trim());


//SPLIT- makes everything an array
const split = 'The quick brown fox jumps over the lazy dog.'
console.log(split.split());

//SLICE- slice out a piece of an array

const greetingss = 'God is a girl';
console.log(greetingss.slice(0,5));



//EXAMPLE:
// check if it start with
// trim
// convert into array only
// slice SVGTextPositioningElement(0,10)
const finger = 'The world is round but some people think otherwise. Round or not the world is not fair   ';
console.log(finger.startsWith('The'));
console.log(finger.trim());
console.log(finger.split());
console.log(finger.slice(0,10));














