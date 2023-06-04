if (document.readyState == "laoding") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  let removeCartItemsButtons = document.getElementsByClassName("btn-danger");
  for (let i = 0; i < removeCartItemsButtons.length; i++) {
    let button = removeCartItemsButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  let amountInputs = document.getElementsByClassName("amount-input");
  for (let i = 0; i < amountInputs.length; i++) {
    let input = amountInputs[i];
    input.addEventListener("change", amountChanged);
  }

  let addToCartButtons = document.getElementsByClassName("add-to-cart");
  for (let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }

  document
    .getElementsByClassName("btn-checkout")[0]
    .addEventListener("click", purchaseClicked);
}

function purchaseClicked() {
  alert(
    "Thank you for your purchase, I am one step closer to buy a Lamborghini"
  );
  let cartItems = document.getElementsByClassName("cart-table")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateTotal();
}

function removeCartItem(event) {
  event.target.parentElement.parentElement.remove();
  updateTotal();
}

function amountChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
}

function addToCartClicked(event) {
  let button = event.target;
  let shopItem = button.parentElement.parentElement;
  let title = shopItem.getElementsByClassName("card-title")[0].innerText;
  let price = shopItem.getElementsByTagName("h6")[0].innerText;
  addItemToCart(title, price);
  updateTotal();
}

function addItemToCart(title, price) {
  let cartRow = document.createElement("tr");
  cartRow.classList.add("cart-row");
  let cartItems = document.getElementsByClassName("cart-table")[0];
  let cartItemNames = cartItems.getElementsByClassName("card-title");
  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("This item is already in the cart");
      return;
    }
  }

  let cartRowContent = `
    <td class="card-title">${title}</td>
    <td class="cart-price">${price}</td>
    <td>
    <input
        type="number"
        class="amount-input"
        value="1" />
    </td>
    <td>
        <button class="btn btn-danger">remove</button>
    </td>
`;
  cartRow.innerHTML = cartRowContent;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("btn-danger")[0]
    .addEventListener("click", removeCartItem);
  cartRow
    .getElementsByClassName("amount-input")[0]
    .addEventListener("change", amountChanged);
}

function updateTotal() {
  let cartItemContainer = document.getElementsByClassName("cart-table")[0];
  let cartRows = cartItemContainer.getElementsByClassName("cart-row");
  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    let priceElement = cartRow.getElementsByClassName("cart-price")[0];
    let amountElement = cartRow.getElementsByClassName("amount-input")[0];
    let price = parseInt(priceElement.innerText.replace("$", ""));
    let amount = amountElement.value;
    total += price * amount;
  }
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}
