// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const arr = [17, 21, 23];
function printForecast(array) {
  let newString = "... ";
  for (let i = 0; i < array.length; i++) {
    let newValue = `${array[i]}C in ${i + 1} days ... `;
    newString = newString + newValue;
  }
  console.log(newString);
}

printForecast(arr);
