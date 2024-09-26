// DOCUMENT OBJECT MODEL(DOM)

const form= document.getElementById('myForm');
const name= document.getElementById('name');
const email= document.getElementById('email');
const list = document.getElementById('myList')


form.addEventListener('submit', function(e){
 e.preventDefault();

//  const name= document.getElementById('name').value
//  const email= document.getElementById('email').value
//  name.value;
//  email.value

 console.log(`New User log in: ${name.value}, (${email.value})`);
 
})

list.addEventListener('click', function(lolo){
  const go = lolo.target;

  if (go.tagName === "LI"){
    console.log('Chapo you are welcome', l.textCOntent);
  }

})

const paragraph = document.querySelectorAll('.element')

// paragraph.textContent= 'New dog in town'

paragraph.forEach(paragraph => {
  paragraph.style.backgroundColor = "red"
})

