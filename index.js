var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // function to add a new item to the shopping cart
 var newItem = {};
 newItem.name = item;
 newItem.price = Math.random();
 console.log(newItem);
 
 cart = getCart();
 
 cart.push(newItem);
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
