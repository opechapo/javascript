// Premitive and Refrence (Non Primitive)
//Primitive value type store the actual value in the variable

let a = "hi"
let c = 2
let b = 5

console.log(a)
console.log(c);
console.log(b);

//Refrence types store the reference address of the actual object in the variable

let m = [1,2,3]  //0x01
let n= [5,4,6]   //0x02
let k = m
k.push(4)
m.push(5)

// m = [1,2,3]
// k = m

console.log(`m =${m}`);
console.log(`k =${k}`);

let z = [1,2]   //storage address: 0x01
let y = [1,2]


// Non Primitive stored in the storage address then the storage address is later stored in the variable

//phone storage

console.log(`z === y ${z === y}`)

console.log(`z = ${z}`)

add(z,3)

console.log(`z= ${z}`)          //Function declaration obeying hoisting

function add(array, element){     //Function declaration obeying hoisting
  array.push(element)
}







