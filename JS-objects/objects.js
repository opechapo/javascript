// Objects: It is a common data structure that hold key and value pairs

// Inside an object we have key and value.
// Key and value are seperated by column
// Properties are seperated by commas

function removee(a,b){
  return 5*4
}
// const removee= substract(5*4)
console.log(removee());


const person = {
  firstName: "Fasasi",
  lastName: "Bello",
  age: 44,
  sex: "male"
}
console.log(person.firstName);
console.log(person.sex);

const Supreme = {
  firstName: "Garuba",
  lastName:"Lawal",
  proffesion: "Bricklayer",
  gender: "Male",
  isMarried: true
}
console.log(Supreme.lastName);

const Director ={
  firstName: "Audu",
  lastName: "Gaba",
  gender: "Male",
  age: 38,
  isMarried: true,
  car1:{
    carName: "Bugatti",
    year: "2023 Autobiography",
    color: "NavyGreen"
  },
  car2:{
    carName: "Masarati",
    year: "1984 vintage",
    color: "Brown"
  }
}
console.log(Director);




const planets= {
  earth:"water and fire",


}
//Variables: Are values in an object
//We can also have variables as value in an object

const firstName= "Amaka";
const lastName= "Njoku";

const person2= {
  firstName: firstName,
  lastName: lastName
}
console.log(person2);

//***************************or*********************** */
const person3= {
  firstName,
  lastName
}
console.log(person3);

// Accessing,update, adding properties in an object
// => Dot Notation .
// => Square Bracket[]

//************************DOT NOTATION************************ */
// it is used to access, add or update a properties of an object
// It allow us to retrieve some values from an object

const Player= {
  firstName:"Kim",
  lastName:"JonYong",
  age:23,
  
  team:{
    Manager: "Jeff",
    clubName: "KanoPillars",
    location: "Mogadishu"
  },
  jerseyNumber: 6

  }
  console.log(Player.team.clubName),console.log(Player.firstName);
  console.log(Player['team']["location"]);
 


  // Build in method : It is  a property that contain a function declaration.
  
const myObject= {
  myObject1: () => {},      // Arrow function
  myObject2: function(){},  //Function expression
  myObject3() {}            //Function Declaration
}    

//Example

const dog = {
  name: "Salisu",
  age: 5,

  bark(){                 //Function Declaration
    console.log("woof woof!")
    
  }
}
console.log(dog.name);
dog.bark()


// ********************OBJECT METHODS****************************
// Object.keys()
// Objects.value()


// Object.keys(): IT creATES AND RETURN an array containing the keys of an objects

const employees = {
  Boss: "CEO",
  secretary: "Dafe",
  sales: "Funbi",
  accountant: "Oreoluwa"

}
const employeeInfo = Object.keys(employees)
console.log(employeeInfo);



//******************************Object.values************************** */

const session = {
  id: 1,
  date: "5-september-2024",
  device: "Mobile",
  browser: "Chrome"
}
const sessionValue = Object.values(session)
console.log(sessionValue);




// /Object.entries- It creates a nested array of the key and value pairs of an object.

// Example
const sessionEntries = Object.entries(session)
console.log(sessionEntries);




// Object.freeze: It prevent modification of existing properties and prevent properties from being added or removed.

const user={
    userName: "Goro",
    password: 904563
}
console.log(user)
const userInfo = Object.freeze(user)
userInfo.userName = "eniola"
console.log(userInfo);


// ***************************.seal method**********************************

// it prevent new properties from being added or removed from an objects

// ****************.seal() example**********************************
const user4 = {
  userName: "Cohort",
  password: 343567
}
const userInfo4 = Object.seal(user4)
userInfo4.userName = "bola",
userInfo4.age= 32
console.log(userInfo4);

let x;
const person5 = {
  name: "jomiloju",
  age: 45,
  isAdmin: true,

  address: {
    street: "12, unity and peace",
    city: "Tsafe",
    state: "Zamfara"
  },
  hobbies: ["music", "sport"]
}
x= person5.name
console.log(x);

// Access an array inside an object

x = person5.hobbies[0]
let y = person5["hobbies"][1]
console.log(x,y)

// Update a property 
person5.name = "anu"   //Style 1
console.log(person5);

person5["isAdmin"]= false   // Style 2
console.log(person5);


// Delete a property

delete person5.address.state;
console.log(person5);


// Add a property
person5.hasChildren = true
console.log(person5)


// add function to an object 
person5.greet = function(){   //This can only be done with function expression
  console.log(`hello, my name is ${this.name}`);
  
}

// person5.age = 34
// x = person.age
// console.log(x);


person5.ageProperty= function(){
  console.log(` ${this.age}`);
  
}
person5.ageProperty()










