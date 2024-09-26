
const cars= ["ford","Bugatti","Bently","Tesla"]
console.log(cars[3]);

//Array methods
const fruits= [
  "mango", "strawberry" , "Cherry", "Banana" , "Cashew" , "Orange", "Cow"
]


//Length
const length = fruits.length;
console.log(length);


//String
const string= fruits.toString();
console.log(string);

//Replace
const replaceEL= fruits[2] = "Pineapple";
console.log(replaceEL);
console.log(fruits);

//POP- removes the last item in an array
const popped = fruits.pop()
console.log(fruits);

//PUSH - add an object to an array(at the end)
const add= fruits.push("mango")
console.log(fruits);

//SHIFT- removes the first array element and "shifts" other element to a lower index

const shifted= fruits.shift();
console.log(fruits);

//Unshift- add a new element to an array(at the beginning), and unshift older elements
const unshifted = fruits.unshift("fufu");
console.log(fruits);


//Example
const country= ["Dakar", "Giogia", "Argentina","Morocco", "Brazil", "Canada","Mali", "Gabon"]

//length
const longg= country.length;
console.log(length);

//String example
const stringer= country.toString();
console.log(country);

//replace example
const replacer= country[4]= "Spain"
console.log(country);

// pop example: remove the last element
const poper= country.pop()
console.log(country);

//push example: add an element to the back of an array

const pusher= country.push('Turkey')
console.log(country);

//Shift of example: remove the first element

const shifter= country.shift()
console.log(country);

//unshift of example : add to the first element

const unshifter = country.unshift("India");
console.log(country);



//SPLICE method : 
const spliced = fruits.splice(3,1,"pear","yam")
console.log(fruits);

//SLICE method in array
const sliced = fruits.slice(1);
console.log(fruits);
console.log(sliced);


const gods = ["Ogun", "Ifa", "Hathor", "Isis",
  "Osiris","Set","Obatala","Esu"]
const spliceAm= gods.splice(5)
console.log(gods);





//CONCAT() thi creates a new array by merging (concatenating) existing arrays.
const myGirls= ["dora", "evelyn", "ruth"];
const myBoys= ["debo","raji","femi"];
console.log(myGirls.concat(myBoys));

const myGirlsi= ["dorati", "evelynn", "rutha"];
const myBoysi= ["debo","raji","femi"];
const myBoyysi= ["debo","raji","femi"];
console.log(myGirlsi.concat(myBoys,myBoyysi));


//INCLUDES  //prints as a boolean
const checkIncludes = myBoys.includes("debo")
console.log(checkIncludes);

const numu = [3,4,5,6,7,2,8,9,4,3,3]

// const index1 = num.lastIndexOf["2"]
console.log(numu.indexOf(2));

// const index = table.index[2]
console.log(numu.lastIndexOf(3));

//SORT
let x;
console.log(x== undefined);


const eso = ["apple", "banana", "orange","watermelon","pawpaw"]


//remove last element
const removeLast = eso.pop()
console.log(eso);

//replace banana with kiwi
const replacing = eso[1] = "Kiwi"
console.log(eso);

















