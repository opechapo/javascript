console.log("Yello World🌍");

// Logical Operators

//  && --> Logical AND- Ampersand
const isAdult = true;
const hasTicket = true;

console.log(isAdult && hasTicket);

const e = true;
const s = false;
console.log(e && s);

// || --> Logical OR
const a = false;
const g = true;
console.log(a || g);

// ! --> Logical NOT

const y = true;
console.log(!y);

// If-else

const temperature = 27;

if (temperature > 25) {
  console.log("temperature is hot");
} else if (temperature == 25) {
  console.log("temperature is normal");
} else {
  console.log("temperature is cool");
}

const og = true;
const tall = false;
const gold = true;

if (og && tall && gold) {
  console.log("og is gold");
} else if (!og || (tall && gold)) {
  console.log("og is short");
} else {
  console.log("og poraro");
}

const number = 0;

if (number < 0) {
  console.log("number is negative");
} else if (number > 0) {
  console.log("number is positive");
} else {
  console.log("number is 0");
}

// write a simple if else statement if a person is old enough to vote

const numbers = 19;

if (numbers >= 18) {
  console.log("you can vote");
} else {
  console.log("you cannot vote");
}

// An if-else statement to check if the number is divisible by 3 &5
const numberToCheck = 15;
if (numberToCheck % 3 == 0 && numberToCheck % 5 == 0) {
  console.log("The Number is divisible by 3 and 5");
} else {
  console.log("The number is not divisible by neither 3 or 5");
}

// Switch
// You want to display a message based on the day of the week. if the day is:

// Monday: "start of the work week"
// Friday: "almost the weekend"
// Saturday:"Enjoy your weekend"
// Sunday: "prepare for the weekend"
// For any other dsy, you want to dispaly a generic message: "Have a great day"

const day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("start of the work week!");
    break;

  case "Tuesday":
    console.log("Have a great day");
    break;
  case "Wednesday":
    console.log("Have a great day");
    break;
  case "Thursday":
    console.log("Have a great day");
    break;
  case "Friday":
    console.log("Almost the weekend");
    break;
  case "Saturday":
    console.log("Enjoy your weekend");
    break;
  case "Sunday":
    console.log("prepare for the day end");
    break;
  default:
    console.log("day not found!");
}
