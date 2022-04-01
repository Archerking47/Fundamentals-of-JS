'use strict';
////////////////////
// Lecture: Values and Variables
////////////////////
const country = "Philippines";
const continent = "Asia";
let population = 109600000;

console.log(country, continent, population);
////////////////////
////////////////////
// Lecture: Data Types
////////////////////
const isIsland = country;
let language;
console.log(isIsland, population, country, language);
////////////////////
////////////////////
// Lecture: let, const and var
////////////////////
language = 'Filipino';
////////////////////
////////////////////
// Lecture: Basic Operators
////////////////////
const halfCountryPopulation = population / 2;
population++;
console.log(population);
let findlandPopulation = 6000000;
if (population > findlandPopulation) {
  `${country} have more people than Findland`;
} else {
  `${country} have less people than Findland`;
}
let averagePopulation = 33000000;
if (population > averagePopulation) {
  `${country} have more people than the average country`;
} else {
  `${country} have less people than the average country`;
}

let description = "Portugal is in Europe, and its 11 million people speak portuguese";
////////////////////
////////////////////
// Lecture: Template Literals
////////////////////
description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
////////////////////
////////////////////
// Lecture: Taking Decisions: if/else statements
////////////////////
if (population > 33000000) {
  console.log(`Portugal's population is above average`);
} else {
  console.log(`Portugal's population is 22 million below average`);
}
////////////////////
////////////////////
// Lecture: Type Conversion and Coercion
////////////////////
console.log('9' - '5',
  '19' - '13' + '17',
  '19' - '13' + 17,
  '123' < 57,
  5 + 6 + '4' + 9 - 4 - 2
);
////////////////////
////////////////////
// Lecture: Equality Operators: == vs. ===
////////////////////
let numNeighbours = Number(prompt('How Many neigbour countries does your country have ?'));

if (numNeighbours === 1) {
  console.log('Only 1 border!')
} else if (numNeighbours > 1) {
  console.log('More than 1 border');
} else {
  console.log('No borders');
}

console.log(typeof (numNeighbours), numNeighbours);