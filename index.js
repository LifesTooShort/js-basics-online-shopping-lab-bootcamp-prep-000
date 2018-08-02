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

 getCart().push({itemName: item, itemPrice: getRandomInt(1, 100) });
 
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // return the contents of the cart
  
  const cart = getCart();
  console.log(cart);
  let contents = (cart.length ===0 ? "Your shopping cart is empty." :
    "In your cart, you have ");
    
  for (let i=0; i < cart.length; i++) {
    contents += `${cart[i].itemName} at \$${cart[i].itemPrice}`;
    
    if (i === cart.length - 1) contents += ".";
    
    else {
      contents += ", ";
      if (i >= cart.length - 2) contents += "and ";
    }
    
    console.log(contents);
    
  }
    
  return contents;
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