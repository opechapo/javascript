// Data types
const x = "Chapo"

const b = 2
const s = true
const firstName = ""

console.log(typeof firstName)

// Boolean

let gogo
let alaye = false;

console.log(gogo);


// Undefined


// null
let goat= null;
console.log( typeof goat);

//  ono-primitive data type
// Object

let person = {
  name: "chapo",
  age: 46,

}

console.log(person.age);


// Array
// array is a special type of objects used to store other collections of data

let colors= [
  "red", {goat: "old"}, "black"
];
console.log(colors);
console.log(colors[2]);
console.log(typeof colors);

let person1 = [
  {
    name: "ali",
    color: "yellow"
  },
  {
    name:"obote",
    color: "brown"
  }
]
console.log(person1)






// operator

let yoyo= 10;
let better= 5;

// Addition
let sum = yoyo+better
console.log(sum);

// Substraction
let Substraction= yoyo-better
console.log(Substraction);

// division 
let divide = yoyo/better
console.log(divide);

// multiplication
let multiplication = yoyo*better
console.log(multiplication);

// Modulus(remainder)
let remainder = yoyo%better
console.log(remainder);

// Exponentiation
let power= yoyo**2
console.log(power);

// Comparison Operators****************************************************
let o = 10;
let d = 20;

console.log(o == d);
console.log(o != d);
console.log(o > d);
console.log(o < d);
console.log(o >= d);
console.log(o <= d);

// "=="(loose)- it compare two values for eqaulity after converting both values to a common type.
// "==="(strict)-it compare two values for eqaulity without type convert both values to a common type.

// let loose= "5"
// let strict= 5
// console.log(loose==strict);
// console.log(loose===strict);


// Switch Statement


let sex = "Male"

person={
  name:"Tolu",
  gender: sex
}


switch(person.gender){
  case "Female":
    console.log("She is a female")
    break;
  case "Male":
    console.log("na man oooo......AH!!!")
    break;
  case "Hermerphrodite":
    console.log("na obanje ooo")
    break;
  default:
    console.log("This one no be human being")

}

// let testScore = 79

// let myGrade=
// testScore > 89 ? "A"
// :testScore > 79 ? "B"
// :testScore > 69 ? "C"
// :testScore > 59 ? "D"
// :"F";
// console.log(My test grade is a ${myGrade}.);




let playerOne = "rock";
let computer = "scissors"

let result =
playerOne === computer
? "It's a tie"
: playerOne ==="rock" && computer === "paper"
? "Computer wins!"
:playerOne === "paper" && computer ==="scissors"
? "Computer wins"
:playerOne === "scissors" && computer ==="rock"
?"computer wins!"
:"Player One Wins!"
console.log(result)




        let age = "18";
        let canVote = (age >= 18) ? "Yes you can vote" : "No you cant vote"
        console.log(canVote);
        










