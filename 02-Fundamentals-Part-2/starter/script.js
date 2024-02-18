"use strict";

function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population} million people and its capital city is ${capitalCity}.`
  );
}

describeCountry("Finland", 6, "Helsinki");

const percentageOfWorld2 = (population) => (population / 7900) * 100;

console.log(percentageOfWorld2(1441));

function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld2(
    population
  )}% of the world.`;
}

console.log(describePopulation("China", 1441));

const populations = [45, 23, 6, 102];

if (populations.length === 4) {
  console.log(true);
} else {
  console.log(false);
}

const percentages = [
  percentageOfWorld2(populations[0]),
  percentageOfWorld2(populations[1]),
  percentageOfWorld2(populations[2]),
  percentageOfWorld2(populations[3]),
];

console.log(percentages);

const neighbours = ["Norway", "Finland", "Sweden"];

if (neighbours.includes("Sweden")) {
  let indexSweden = neighbours.indexOf("Sweden");
  neighbours[indexSweden] = "Republic of Sweden";
  console.log(neighbours);
}

const listOfNeighbours = [
  ["Canada", "Ukraine"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let l = 0; l < listOfNeighbours[i].length; l++) {
    console.log(`Neighbour: ${listOfNeighbours[i][l]}`);
  }
}
