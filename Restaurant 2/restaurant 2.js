var menuitem ="";
var orders = [];

// handle menu item click event
function handleItem() {
  addToCart();
  changeButton();
  addToOrder();
}

// unhide Shopping Cart icon
function showCartIcon(item) {
  
};

// change menu name of clicked button to "Added to Cart!"
function changeButton() {
  
 };

 // a) create an object containing the name and price of the item;
 // b) store object data as key-value pairs
 // c) store object in the global orders[]; 
 function addToOrder() {
    
 };

 // !! DO NOT MODIFY OR DELETE 
 // a) handle Shopping Cart click event
 // b) store orders[] to a local object called sessionStorage
 // c) open page "restaurant 2 order.html"

 function showCart() {
   sessionStorage.setItem("orders", JSON.stringify(orders));
   location.href = "restaurant 2 order.html";
 };
