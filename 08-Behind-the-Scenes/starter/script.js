'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1986 && birthYear <= 1991) {
      const str = `Oh, you are a millenial, ${firstName}`;
      console.log(str);
    }
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

console.log(funcDec(2, 3));
// Possible to call function declaration before actual function definition due to hoisting, not possible for 2 next examples

function funcDec(a, b) {
  return a + b;
}

const funcExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//Copying object and changing one of the values
//This approach creates only shallow copy, the first level of object
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Willians',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
