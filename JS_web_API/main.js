//Store an Object
// How to set item to the local storage
localStorage.setItem('myObject', JSON.stringify({name: 'Emmy', age: 20 }))

// localStorage.removeItem('myObject')
localStorage.clear()

const storeObject= JSON.parse(localStorage.getItem('myObject'))
console.log(storeObject);


//Examples

// SET
localStorage.setItem("theme","dark")
const getTheme= (localStorage.setItem("fontSize","10px"))

// GET
const getBack=(localStorage.getItem("theme"))
console.log(getBack);
// console.log(localStorage.getItem("theme"));
console.log(localStorage.getItem("fontSize"));

sessionStorage.setItem("formData",JSON.stringify({name:"chapo", age: 30}))

const getData = JSON.parse(sessionStorage.getItem("formData"))
console.log(getData.name);




// console.log(backDoor);

// console.log(backDoor);


// JSON.parse: It converts string to objects

//Web API : webs storage api is a mechanism provided by we browser 

//Local storage is useful for storing data that should be available across brower session.
//  Ex of local storage : User preference
// Session storage: It is useful for storing temporary data that should be accessable during the lifetime of the current browser session.


// setItem: to send 
// getItem: to get 


// localStorage.clear()
// Features:

// 1. Key Value pair: storing in an object like format
// 2. Synchronus: It means it going to store data as it appears.
// 3. Same Origin Policy: 





// Synchronous code is executed line by line, in order, where each operation must complete before moving on to the next.

// Asynchronous code, on the other hand, allows operations to execute without blocking the main execution thread. This means other tasks can run while waiting for the async operation to complete.

//ASYCHRONOUS JS: one of the common one is : callback.
//Callback pattern is one of the ways to handle asynchronous 
// Call back: is a function that is passed as an argument to another function


