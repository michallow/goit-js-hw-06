const categoriesUl = document.getElementById("categories");
const categoryItems = categoriesUl.querySelectorAll("li.item");
const numberOfCategories = categoryItems.length;
console.log("Liczba kategorii:", numberOfCategories);

for (let i = 0; i < categoryItems.length; i++) {
  const header = categoryItems[i].getElementsByTagName("h2")[0].textContent;
  const categoryItemElements = categoryItems[i].querySelectorAll("ul > li");
  const numberOfCategoryItems = categoryItemElements.length;

  console.log("Kategoria:", header);
  console.log("Liczba elementów:", numberOfCategoryItems);
}
