//Assingment 1

const eso = ["apple", "banana", "orange", "watermelon", "pawpaw"];
const fruits = ["mango", "pineapple", "orange"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Remove the last object

function removeArray(arr) {
  arr.pop();
  return arr;
}
console.log(removeArray(fruits));

// console.log(removeArray(eso))

//Replace object
function replaceData(arr) {
  arr.splice(1, 1, "kiwi");
  return arr;
}
console.log(replaceData(eso));

//Assingment 2

const person = {
  name: "chapo",
  age: 34,
  location: "lagos",
};
// const person1 = {
//   name: "chapon",
//   age: 35,
//   location: "lagosa"

// }

//print using dot and square method

function view(obj) {
  return [obj.name, obj.age];
}
console.log(view(person));

//update the age to 25

function update(objs) {
  objs.age = 25;
  return objs;
}
console.log(update(person));

//return key value as array

function give(value) {
  return Object.entries(value);
}

console.log(give(person));

//Preventing adding new properties but edit existing one

function constant(obj) {
  return Object.seal(obj);
}
console.log(constant(person));
person.location = "Ogun";
console.log(constant(person));


const sealP(value)=> {
  return value.seal
}
console.log(sealP(person));



function add(a, b) {
  return a + b;
}
console.log(add(4, 3));
console.log(add(5, 5));

function addAndDivide(n, m, u) {
  return (n * m) / u;
}

console.log(addAndDivide(5, 2, 3));



