const sideBar = document.querySelector(".side-bar");
const cartList = document.querySelector(".card-list");
const totalAmountElement = document.querySelector(".total-amount");

const shoppingCart = [];
const dishes = [
  {
    id: 1,
    name: "Plat 1",
    price: 10,
    image: "./assets/download.jpg",
  },
  { id: 2, name: "Plat 2", price: 15, image: "./assets/img2.jpg" },
  { id: 3, name: "Plat 3", price: 20, image: "./assets/img3.jpg" },
];

function openSideBar() {
  sideBar.style.display = "flex";
}
// close side bar
function closeSideBar() {
  sideBar.style.display = "none";
}

function addSelectedItem(itemId) {
  let selectedDish = dishes.find((dish) => dish.id === itemId);
  shoppingCart.push(selectedDish);
  openSideBar();
  updateCart();
  updateTotalAmount();
}
function removeFromCart(itemId) {
  const indexToRemove = shoppingCart.findIndex((item) => item.id === itemId);
  shoppingCart.splice(indexToRemove, 1);
  updateCart();
  updateTotalAmount();
}
function updateCart() {
  cartList.innerHTML = "";
  shoppingCart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-info">
          <p>${item.name} - $${item.price.toFixed(2)}</p>
        </div>
        <button class="delete-btn" onclick="removeFromCart(${
          item.id
        })">Delete</button>
      `;
    cartList.appendChild(cartItem);
  });
}

function updateTotalAmount() {
  const totalAmount = shoppingCart.reduce(
    (total, item) => total + item.price,
    0
  );
  totalAmountElement.textContent = `Total: $${totalAmount.toFixed(2)}`;
}
