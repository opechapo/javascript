const car = {
  brand: "Toyota",
  model: "Venza",
  year: 2014,
};

const dog = {
  brand: "GS",
  model: "halfBingo",
  year: 2023,
};

function access(obj) {
  return [obj.brand, obj["year"]];
}
console.log(access(car));

function update(arry) {
  arry.year = 2017;
  return arry;
}
console.log(update(dog));

function key(arr) {
  return Object.keys(arr);
}
console.log(key(dog));

// function even(filt) {}

const fruits = ["apple", "banana", "orange", "", "watermelon", "pawpaw"];

function removeArray(arr) {
  arr.pop();
  return arr;
}
console.log(fruits);

