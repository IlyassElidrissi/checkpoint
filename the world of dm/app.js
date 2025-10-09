// Get all elements
const plusBtns = document.querySelectorAll(".fa-plus-circle");
const minusBtns = document.querySelectorAll(".fa-minus-circle");
const deleteBtns = document.querySelectorAll(".fa-trash-alt");
const likeBtns = document.querySelectorAll(".fa-heart");
const totalElement = document.querySelector(".total");

// --------------------
// 🔹 Function to update total price
// --------------------
function updateTotal() {
  let total = 0;
  const products = document.querySelectorAll(".card");
  products.forEach(card => {
    const unitPrice = parseFloat(card.querySelector(".unit-price").textContent.replace("$", ""));
    const quantity = parseInt(card.querySelector(".quantity").textContent);
    total += unitPrice * quantity;
  });
  totalElement.textContent = total + " $";
}

// --------------------
// 🔹 Increase quantity
// --------------------
plusBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const quantitySpan = btn.nextElementSibling;
    let quantity = parseInt(quantitySpan.textContent);
    quantity++;
    quantitySpan.textContent = quantity;
    updateTotal();
  });
});

// --------------------
// 🔹 Decrease quantity
// --------------------
minusBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const quantitySpan = btn.previousElementSibling;
    let quantity = parseInt(quantitySpan.textContent);
    if (quantity > 0) {
      quantity--;
      quantitySpan.textContent = quantity;
      updateTotal();
    }
  });
});

// --------------------
// 🔹 Delete product
// --------------------
deleteBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".card-body").remove();
    updateTotal();
  });
});

// --------------------
// 🔹 Like / Unlike product
// --------------------
likeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.color = btn.style.color === "red" ? "black" : "red";
  });
});
