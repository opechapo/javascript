//Map method creates a new array from calling a function for every array element.




//For each function /method:  it is mostly used method of array. it perform an action for each elements of an array

const names = ["bola", "dibu", "wonuola"];

//ES5 FOR LOOP method
for (let i = 0; i < names.length; i++) {
  console.log(i, names[i]);
}

//For each() method :we need value and argument for "For each" method

names.forEach(function () {});

names.forEach(() => {});

names.forEach((value, i, arr) => {
  console.log(value);
});

let totalValue = 0;
const trns = [42, 45, 26, 4, 13, 16];
trns.forEach((trns) => {
  console.log(totalValue, (totalValue += trns), trns);
});
console.log(totalValue);

const colors = ["red", "blue", "pink", "green"];
colors.forEach((color) => {
  console.log(color);
});

const numbers = [10, 20, 30];
let sum = 0;
numbers.forEach((value) => {
  sum += value;
});
console.log(sum);

const era = [29, 45, 43, 55, 90];
let x = 0;
era.forEach((total) => {
  x += total;
});
console.log(x);

//Filter(): this creates a new array with only the element that passes a condition(text) defined in a function. it will return a new array and the original array is not modified. we normally use filter to keep cercern element and exclude others based on the condition.

const arrNumber = [-20, -40, 43, 30, -1, 23, 34, -50, 44, -75];
//example for filter() print out the negative values

const negative = arrNumber.filter((number) => number > 0);
console.log(negative);

// const negative = arrNumbers.filter(())

//loop method to solve the question
let negNums = [];
for (let i = 0; i < arrNumber.length; i++) {
  if (arrNumber[i] < 0) {
    negNums.push(arrNumber[i]);
  }
}
console.log(negNums);

let goat = [];
for (let i = 0; i < goat.length; i++) {
  const element = goat[i];
}
//For each methods

let negNums1 = [];

arrNumber.forEach((arrNumber) => {
  if (arrNumber < 0) {
    negNums1.push(arrNumber);
  }
});
console.log(negNums1);

// const arrNumber = [-20, -40, 43, 30, -1, 23, 34, -50, 44, -75];

// const negative = arrNumber.filter((number) => number > 0);
console.log(negative);

nums = [1, 2, 3, 4];

// const greater= nums.filter((value) =>{
//   if (nums <2){
//     nums.push()
//   }
// })

// const negative = arrNumber.filter((number) => number > 0);
console.log(negative);

let mubby = [1, 2, 3, 4];
// mubby.forEach((value) => {
//   if (nums > 2) {
//     mubby.push(nums);
//   }
// });
// console.log(mubby);

// const numberss = mubby.filter((mubby) => mubby > 2);
// console.log(numberss);

// const cohorts = {
//   Opeyemi: "kogi",
//   ralph: "Ekiti",
//   emma: "Ekiti",
//   teddy: "delta",
//   mubby: "borno",
// };

// const Pekiti = cohorts.filter((cohort) => cohort.values === "Ekiti");
// console.log(Pekiti);

//Make an array of your fellow cohorts and their state of origin
//(a) filter out the people from ekiti state
// list out the filtered people

const coharts = [
  {
    name: "chapo",
    sob: "kogi",
  },
  {
    name: "mubby",
    sob: "borno",
  },
  {
    name: " teddy",
    sob: "delta",
  },
  {
    name: "og",
    sob: "ekiti",
  },
  {
    name: "ralph",
    sob: "ekiti",
  },
  {
    name: "rodiah",
    sob: "kwara",
  },
];

const ekitiCOharts = 
coharts.filter((cohart) => cohart.sob === "ekiti");
console.log(ekitiCOharts);

ekitiCOharts.forEach((cohart) => console.log(cohart.name));


//Map Method: Iterates and allows us to add a function 

//Examples

//Ex1
const numbas=[1,2,3,4,5,6]

//Map
const multiplied = numbas.map(number => number * 2)
console.log(multiplied);

const multiply = numbas.map((value) => value*5)
console.log(multiply);


//For each
const add= numbas.forEach((numbr) => {
  console.log(numbr);
  
})

//filter
const list =
numbas.filter((plus) => plus< 2)
console.log(list);


//Ex2
const words = ["hello","world","really"]

//map
const upperCaseWords = 
words.map(word => word.toUpperCase())
console.log(upperCaseWords);


//for each
const listOut=
words.forEach((word) => {
  console.log(word);
  
})

//filter

const filt = 
words.filter((value) => {
  console.log(words);
})

// const users = [
//   {
//     name:"opera",
//     age:67
//   },
//   {
//     name: "Mubby", 
//     age: 100
//   },
//   {
//     name: "Rodiyah",
//     age: 30
//   },
//   {
//     name: "og",
//     age: 25
//   }
// ]

// const userName = 
// users.map(user => user.name)
// console.log(userName);

// const oldUsers = users.map(user => ({
//   ...user,
//   isOld: user.age >= 67
// }))
// console.log(oldUsers);


// const aged= 
// users.filter((pass) =>{
//   users.age <= 67
// })
// console.log(aged);

//Ex

// const people =[
//   {
//     name:"chapo",
//     age: 15
//   },
//   {
//     name: "wale",
//     age: 34
//   },
//   {
//     name:"yusuf",
//     age: 23
//   }
// ]

// const isSenior= 
// people.map((senior) => ({
//   ...senior,
//   isSenior: senior.age > 20
// }))
// console.log(isSenior);


// const peopleAgeVerification = people.map(person => {
//   let ageGroupCalc

//   if (person.age < 18){
//     ageGroupCalc = "Child"
//   }else if(person.age >= 18 && person.age < 50){
//     ageGroupCalc = "Adult"
//   }else{
//     ageGroup = "old"
//   }

//   return{
//     ...person,
//     isSenior: person.age >= 20,
//     ageGroup: ageGroupCalc
//   }
// })
// console.log(peopleAgeVerification);


// const ageGroup= 
// people.map((group) => ({ ...group,
//   ageGroup: group.age < 18 
// }))
// console.log(ageGroup);

// const ageGroups= 
// people.map((groups) => ({ ...groups,
//   adult:  (groups.age > 18)
// }))
// console.log(ageGroups);

// const ageGrouped= 
// people.map((group) => ({ ...group,
//   old: group.age >= 50
// }))
// console.log(ageGrouped);






// Create a set of data of contacts with each contact having a name, email and phone number

// Create a function to add a contact 
// Create a function to delete a contact 
// Create a function to find a contact 
//  Create a function that brings out all the list of the contact 
// Create a function that helps update the email of a contact 
// A function that that displays the details of a particular Contact 


// const data= [
//   {
//     name: "frog",
//     email: "abolajioewr@ghel.com",
//     pNumber: 09383
//   },
//   {
//     name: "rator",
//     email: "erafoster@gopw.com",
//     pNumber: 37382
//   },
//   {
//     name: "ratoraw",
//     email: "erafoster@gopw.comot",
//     pNumber: 37929
//   }
// ]

// const addie= data.push((add) => )


// Make An Array of  your fellow Cohorts and their state of origin 


// Filter out the people from Ekiti State 
// List out the Filtered people.







// An Array of people having their name and age 

// Add an isSenior Property that brings true when the age is more than or equal to 20 and false when the age is less than 20 

// Add another a ageGroup property that carries
 
//  Child if the person age is less than 18
// Adult if the person is 18-49 in age
// Old if the person is 50 and above in age




const peopleA = [
  {
    name: "chapo",
    age: 45
  },
  {
    name: "ratul",
    age: 21
  },
  {
    name: "ratula",
    age: 19
  }
]


// const addGroup = peopleA.map((x) => {{
//   let ageGroup
// if(people.age < 20) {
//   ageGroup: "young"
// } else if (people.age>=20){
//   ageGroup = "old"
// }else (ageGroup = "old")
// }})
// console.log(addGroup);



// if (person.age < 18){
//   ageGroupCalc = "Child"
// }else if(person.age >= 18 && person.age < 50){
//   ageGroupCalc = "Adult"
// }else{
//   ageGroup = "old"
// }



