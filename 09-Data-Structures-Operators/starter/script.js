'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order reveived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredirent, ...otherIngredients) {
    console.log(mainIngredirent);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Test',
  mainIndex: 2,
  starterIndex: 2,
});

// Destructuring array

const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

let [first, second] = restaurant.categories;
console.log(first, second);

let [firstItem, , third] = restaurant.categories;
console.log(third);

//switching the position of variables in the array
[first, second] = [second, first];

let [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);

const [d, , [e, f]] = nested;
console.log(d, e, f);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//Destructuring object

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//Renaming variable names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName);

//Renaming and setting up the default value

const { menu = [], starterMenu: starters = [] } = restaurant;
// if there is already items in the object for the variable, the default = empty array will not apply
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested objects
const { fri } = openingHours;
console.log(fri);

const {
  fri: { open: o, close },
} = openingHours;
console.log(o, close);

//Spread operator(...)
const arr1 = [7, 8, 9];
const newArray = [1, 2, ...arr1];
console.log(newArray);
console.log(...newArray);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Create shallow copy of the array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const twoMenus = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(twoMenus);

//Working with itterable
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);

/*
const ingredients = [
  prompt("Let's make pasta! Ingredirent 1?"),
  prompt('Ingredirent 2?'),
  prompt('Ingredirent 3?'),
];

*/

// console.log(restaurant.orderPasta(...ingredients));

//Objects with spread
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Peter' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy);

//REST because on LEFT side of =
const [g, h, ...others] = [1, 2, 3, 4, 5];
console.log(g, h, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//REST for objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//Functions REST parameters

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const s = [23, 5, 7];
add(...s);

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');

const rest1 = {
  name: 'Capri',
  numberGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

rest2.numberGuests = rest2.numberGuests || 10;
//The same approach to write the expression, but with shorter syntax
rest1.numberGuests ||= 10;

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const player1 = [...game.players[0]];
const player2 = [...game.players[1]];
const [players1, players2] = game.players;
console.log(player1);
console.log(player2);

const [gk, ...fieldPlayer] = player1;
console.log(gk);

const allPlayers = [...player1, ...player2];
console.log(allPlayers);

const player1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(player1Final);

const { team1, draw, team2 } = game.odds;
console.log(team1);

function printGoals(...namesFt) {
  console.log(namesFt);
  let numberOfGoals = namesFt.length;
  console.log(numberOfGoals);
}

console.log(team1 < team2 && console.log(`Team 1 is more likely to win`));

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User array empty');

//looping object
const properties = Object.keys(openingHours);

for (const day of properties) {
  console.log(`We are open on ${properties.length} days: += ${day}`);
}

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// Coding challenge 2

for (const [i, el] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${el}`);
}

const array = Object.values(game.odds);
function getAver(array) {
  const total = array.reduce((a, b) => a + b, 0);
  return total / array.length;
}
const average = getAver(array);
console.log(average);

const oddsArray = Object.entries(game.odds);

for (const [key, value] of oddsArray) {
  if (key === 'team1') {
    console.log(`Odd of victory ${game.team1}: ${value}`);
  }
  if (key === 'x') {
    console.log(`Odd of draw: ${value}`);
  }
  if (key === 'team2') {
    console.log(`Odd of victory ${game.team2}: ${value}`);
  }
}

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

//Sets

const orderSet = new Set(['Pasta', 'Pizza', 'Risotto']);
console.log(orderSet);
console.log(new Set('Jonas'));
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));

orderSet.add('Garlic Bread');
orderSet.delete('Risotto');

// orderSet.clear();

for (const order of orderSet) console.log(order);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);

// To update object to an array

const staffUnique2 = [...new Set(staff)];
console.log(staffUnique2);

// Maps

const rest = new Map();
rest.set('name', 'Classico Italiano'); //adding value
rest.set(1, 'Rirenze, Italy');

console.log(rest);

rest
  .set('categories', ['Italian', 'Organic'])
  .set('open', 11)
  .set('closed', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed');

console.log(rest.get('name'));

const time = 21;
console.log(
  rest.get(
    time > rest.get('open') && rest.get('open') && time < rest.get('close')
  )
);

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// console.log(rest.clear());

const array2 = [1, 2];
rest.set(array2, 'Test');
console.log(rest.get(array2));

rest.set(document.querySelector('h1'), 'Heading');

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JS'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);

console.log(question);

//Convert object to map
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

//const answer = Number(prompt('Your answer'));
//console.log(answer);

//console.log(question.get(question.get('correct') === answer));

//Convert map to array
console.log([...question]);

// Coding challenge 3
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

const numberOfEvents = gameEvents.size;
console.log(
  `An event happened, on average, every ${90 / numberOfEvents} minutes`
);

for (const [minute, event] of gameEvents) {
  if (minute < 45) {
    console.log(`[First half] ${minute}: ${event}`);
  } else {
    console.log(`[Second half] ${minute}: ${event}`);
  }
}

//Working with strings

const airline = 'TAP Air Portugal';
const plane = 'A320';

// Methods
console.log(airline.indexOf('r')); // first occurance
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2)); // taking 2 last symbols from the end
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log(`You got the middle seat`);
  } else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());

const passenger = 'jOnAS';
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

//Replacing

const priceGB = '288,97$';
const priceUS = priceGB.replace('$', '&').replace(',', '.').charAt;

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replaceAll('door', 'gate'));

//Booleans

const plane2 = 'A320neo';

console.log(plane2.includes('A320'));
console.log(plane2.startsWith('Air'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('Part of the NEW airbus family');
}

const checkBaggage = function (items) {
  const baggage = items.toLocaleLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome abord');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

console.log('a+very+nice+string'.split('+'));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName);
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
const passenger2 = 'jessica ann smith davis';
capitalizeName(passenger2);

//Padding string

const message2 = 'Go to gate 23!';
console.log(message2.padStart(25, '+').padEnd(35, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

maskCreditCard(43378463864647384);

//Repeat

const message3 = 'Bad weather... All departures delayed';
console.log(message3.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${' '.repeat(n)}`);
};

// Coding challenge 3

const changeFunction = function (value) {
  const str = value.split('\n');
  for (const [i, row] of str.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    let output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    console.log(`${output.padStart(20)}${'🆗'.repeat(i + 1)}`);
  }
};
let testValue =
  'underscore_case\nfirst_name\nSome_Variable\ncalculate_AGE\ndelayed_departure';

changeFunction(testValue);

//Practice
const flights1 =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

console.log(flights1.split('+'));

const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} ${time.replace(':', 'h')}`.padStart(36);
  console.log(output);
}
