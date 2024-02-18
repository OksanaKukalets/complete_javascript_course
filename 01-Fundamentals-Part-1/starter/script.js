let country = "Ukraine";
let continent = "Eurasia";
let population = 45;
console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
const language = "Ukrainian";

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

let description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);

if (population > 33) {
  console.log("Ukraine's population is above average.");
} else {
  console.log(
    `Ukraine's population is ${33 - population} million below the average.`
  );
}

if (language === "Ukrainian" && population < 50 && !isIsland) {
  console.log("You should live in Ukraine.");
} else {
  console.log("Ukraine is not your country");
}

switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  default:
    console.log("Great language too");
}
