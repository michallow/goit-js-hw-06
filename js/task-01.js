const categoriesUl = document.getElementById("categories");
const categoryItems = categoriesUl.querySelectorAll("li.item");
const numberOfCategories = categoryItems.length;
console.log("Liczba kategorii:", numberOfCategories);

for (const i = 0; i < categoryItems.length; i++) {
  const header = items[i].getElementsByTagName("h2")[0].textContent;
  const categoryItems = items[i].getElementsByTagName("li")[0].length;

  console.log("Kategoria:", header);
  console.log("Liczba elementów", categoryItems);
}
