let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let names = [
  "Adriana",
  "Chase",
  "Edmund",
  "Hannah",
  "Kunj",
  "Rick",
  "Jamie",
  "Kelsey",
  "Steven",
  "Braylan",
  "JaiVon",
  "John",
  "Kristina",
  "Ryan",
  "Faith",
  "Marcus",
  "Spencer",
  "Sam",
  "Zach",
];

// forEach

// always returns undefined
// used to execute function once for each element in an array

// function forEachExample(array) {
//   return array.forEach((item) => {
//     console.log(item);
//   });
// }

// use forEach to console.log the squared value of each element in the array

// numbers.forEach((num) => {
//   console.log(num * num);
// });

// function squareNum(num) {
//   console.log(num * num);
// }

// numbers.forEach(squareNum);

// map

function mapExample(array) {
  return array.map((item) => {
    console.log(item);
    return "Hello World";
  });
}

// transform array of numbers into an array of squared values

let squares = numbers.map((num) => {
  return num * num;
});
// console.log(squares);
// transform array of names into an array of greetings i.e "Hello Adriana"

let greetings = names.map((name) => {
  // return `Hello ${name}`;
  return "Hello " + name;
});

// find

let number = numbers.find((num) => {
  return num === 5;
});

// filter

let oddNumbers = numbers.filter((num) => {
  return num % 2 === 1;
});

let evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});

let numbersGreaterThanTen = numbers.filter((num) => {
  return num > 10;
});

function searchNames(query) {
  return names.filter((name) => {
    return name.includes(query);
  });
}

for (const key in test) {
  delete test[key];
}
