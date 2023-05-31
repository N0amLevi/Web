document.querySelector("#cookies-btn").addEventListener("click", () => {
  document.querySelector("#cookies-alert").style.display = "none";
  Cookies.set("consent", true, { expires: 30 });
});

if (Cookies.get("consent")) {
  document.querySelector("#cookies-alert").style.display = "none";
}

/*
document.querySelector('#yPhone1').addEventListener("click", () => {
  document.querySelector('#cart-empty').style.display = "none";
})
*/

// function yPhone1() {
//   Cookies.set("yPhone1", true, { expires: 30 });
//   document.getElementById("empty-cart").style.display = "none";
//   var yPhone1Cart = `<div class="container"><h3>yPhone 1</h3><input type="number" id="yphone1quantity" /><h5>${
//     document.getElementById("yphone1quantity") * 699
//   }</h5></div>`;
//   document.getElementById("no-display").innerHTML = yPhone1Cart;
//   if (Cookies.get("yPhone1") == true){
//     document.getElementById("empty-cart").style.display = "none";
//   }
// }

// document.querySelector("#yPhone1").addEventListener("click", () => {
//   document.getElementById("empty-cart").style.display = "none";
//   Cookies.set("yPhone1", true, { expires: 30 });
// });

// if (Cookies.get("yPhone1")) {
//   document.querySelector("#empty-cart").style.display = "none";
// }

// document.getElementById('cart').innerHTML = <div class="container" id="empty-cart">
// <h1 class="text-center display-1">
//   There's nothing here...
// </h1>
// <p class="text-center display-6">
//   It appears that your shopping cart is empty. I'm
//   eagerly awaiting your money. Remember: the more you
//   spend, the quicker I get to buy a Lamborghini.
// </p>
// </div>