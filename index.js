var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function addToCart(item) {
 // function to add a new item object to the shopping cart
 cart = getCart();
  
 var newItem = {};
 newItem.itemName = item;
 newItem.itemPrice = getRandomInt(1, 100);
 console.log(cart, newItem);
 
 cart.push(newItem);
 console.log(cart);
 
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

addToCart("apples");