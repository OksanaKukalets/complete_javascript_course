//importing module
//import { addToCart, totalPrice as price, qt } from './shoppingCart';
// console.log(price, qt);

//import * as ShoppingCart from './shoppingCart.js';
//ShoppingCart.addToCart('bread', 5);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);

console.log(cart);

//const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//const data = await res.json();

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLastPost();

const lastPost2 = await getLastPost();
console.log(lastPost2);

const ShoppingCart2 = (function () {
  const cart = [];
  const shoppingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };
  return { addToCart, cart, totalPrice, totalQuantity };
})();

ShoppingCart2.addToCart('apple', 4);
console.log(ShoppingCart2);

// import cloneDeep from '/node_modules/lodash-es/cloneDeep.js';
import { cloneDeep } from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person1 {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
  }
}
console.log(cart.find(el => el.quantity >= 2));
import 'core-js/stable';
