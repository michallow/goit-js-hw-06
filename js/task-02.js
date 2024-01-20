const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.getElementById("ingredients");

const liItem = ingredients.map((ingredient) => {
const liElement = document.createElement("li");
liElement.textContent = ingredient;
liElement.classList.add("item");

return liElement;
});

ulIngredients.append(...liItem)