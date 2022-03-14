// REUSE COMPONENT
const pizzaItem = document.getElementById("pizza-items");
const saladItem = document.getElementById("salad-items");
const noodleItem = document.getElementById("noodle-items");
// ACTIVE CLASS ADD
const pizza = document.getElementById("pizza-active");
const salad = document.getElementById("salad-active");
const noodle = document.getElementById("noodle-active");

const pizzaItems = () => {
  saladItem.style.display = "none";
  noodleItem.style.display = "none";
  pizzaItem.style.display = "block";
  pizza.classList = "active btns";
  noodle.classList = "ms-3  btns";
  salad.classList = " btns ms-3";
};
pizzaItems();
const saladItems = () => {
  pizzaItem.style.display = "none";
  noodleItem.style.display = "none";
  saladItem.style.display = "block";
  noodle.classList = "ms-3  btns";
  pizza.classList = "btns";
  salad.classList = "active btns ms-3";
};
const noodleItems = () => {
  pizzaItem.style.display = "none";
  saladItem.style.display = "none";
  noodleItem.style.display = "block";
  noodle.classList = "ms-3 active btns";
  salad.classList = " btns ms-3";
  pizza.classList = "btns";
};
