var menuitem ="a";
var orders = [];

function viewCart(item) {
  menuitem = item;
  var view = document.getElementsByClassName("btn");
  view[0].style.display = "table";
  changeButton();
  addToOrder();

  return;
};

function changeButton() {
  var x = document.getElementById("item"+menuitem);
  x.className = "in-cart";
  x.textContent = "Added to Cart!";
  return;
 };

 function addToOrder() {
    var item = document.querySelector("#item"+menuitem);
    // alert(item.dataset.item+" "+item.dataset.price);
    
    var order = {
      item: item.dataset.item,
      price: item.dataset.price
    };
    orders.push(order);
    return;
 };

 function showCart() {
   sessionStorage.setItem("orders", JSON.stringify(orders));
   location.href = "restaurant 2 order.html";
 };
