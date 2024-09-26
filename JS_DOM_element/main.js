// DOM methods

const chapo = document.getElementById('demo')
chapo.innerHTML = "my gee"


//Selectors

// document.getElementById
// document.getElementsByClassName
// document.getElementsByName
// document.getElementsByTagName

// document.querySelector
// document.querySelectorAll


document.getElementById("demo").innerHTML = "Milla"

const bush = document.getElementsByClassName("mean")

console.log(bush);

// const arrayExtract = Array.from(bush)
// console.log(arrayExtract)

// arrayExtract.forEach((element) => {
//   element.innerHTML = "Bush"
// });

// arrayExtract.forEach(() => {})

const w= document.getElementById("main");
const r = document.getElementById("Demo")
const fu= document.getElementsByClassName("example")

//how to change color with JS
w.style.backgroundColor = "pink"

//how to change content with JS
w.textContent = "Become a tech guru"

//BUTTON 
const button = document.getElementById("myButton")

button.addEventListener('click', function () {
  console.log("Button is active");
  
})







