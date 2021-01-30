var menuitem;
var orders;

function viewCart(item) {
  menuitem = item;
  var view = document.getElementsByClassName("btn");
  view[0].style.display = "table";
  changeButton();

  return;
};

function changeButton() {
  var x = document.getElementById(menuitem);
  x.className = "in-cart";
  x.textContent = "Added to Cart!";
  return;
 };

 function addOrder() {

  return;
 };
