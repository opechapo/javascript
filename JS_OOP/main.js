//FOR DATE

// const myDate = new Date();
// console.log(myDate);
// console.log(myDate.getFullYear());

//Object

const people= {
  name:"bob",
  age: 45,
  isBlack: true
}
console.log(people);

// Class

class Persons {
  constructor(name, age, gender, address){
    this.name = name,
    this.age = age,
    this.gender = gender,
    this.address = address

  }
}

const user1 = new Persons('Naheem',10,"Male","Ogun")
const user2 = new Persons('Opera',34,"Male","Tokyo")
const user3 = new Persons('Chapo',43,"Male","OSLO")
const user4 = new Persons('Mubby',90,"Male","BORNO")
const user5 = new Persons('Teddy',29,"Male","Moscow")
const user6 = new Persons('Rodi',78,"Female","Taiwon")


class Date {
  constructor (day, month, year)  {
    this.day= day,
    this.month= month,
    this.year = year
  }
}

const myDate= new Date(26, "sept", 2040)
console.log(myDate);



console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);
console.log(user6);

console.log([user1, user2]);


//Using ARROW FUnction

const createPerson = (name, age, gender, address) =>{
  const schremaCrate =
  {
    name,
    age,
    gender,
    address
  }
  return schremaCrate
}

const addUser = createPerson('kk', 12, 'male', 'lagos')
console.log(addUser);


//INheritance
class Animal  {         //Parent class
  alive= true;

  isbeautiful = `This is beautiful`
  
  eat() {        //Constructor
    console.log(`This ${this.name} can eet`);
    
  }
  sleep(){        //Constructor
    console.log((`This ${this.name} can run`));
    
  }
}

class Rabbit extends Animal{         //Child class
  name= "rabbit"

  run(){
    console.log(`This ${this.name} can can`);
    
  }
}

class fish extends Animal{
  name= "fish"

  swim(){
    console.log(`This ${this.name} can swim`);
    
  }
}

const rabbit = new Rabbit
console.log(rabbit)
console.log(rabbit.name);



