document.querySelector("#cookies-btn").addEventListener("click", () => {
  document.querySelector("#cookies-alert").style.display = "none";
  Cookies.set("consent", true, { expires: 30 });
});

if (Cookies.get("consent")) {
  document.querySelector("#cookies-alert").style.display = "none";
}

function yPhone1() {
  Cookies.set("yPhone1", true, { expires: 30 });
  document.getElementById("empty-cart").style.display = "none";
  var yPhone1Cart = `<div class="container"><h3>yPhone 1</h3><input type="number" id="yphone1quantity" /><h5>${
    document.getElementById("yphone1quantity") * 699
  }</h5></div>`;
  document.getElementById("no-display").innerHTML = yPhone1Cart;
}
