const recipeDetailsList = document.querySelector('ul').getElementsByTagName('li');

for (let item of recipeDetailsList) {
  item.innerText = item.innerText.split(': ')[1];
}

recipeDetailsList[0].innerHTML = `<span class="iconify" data-icon="fluent:people-team-16-filled"></span><span>${recipeDetailsList[0].innerText}</span>`;

recipeDetailsList[3].innerHTML = `<span class="iconify" data-icon="feather:clock"></span><span>${recipeDetailsList[3].innerText}</span>`;

const ingredientsList = document.querySelector('.ingredients').getElementsByTagName('li');

console.log(ingredientsList);

for (let index = 0; index < ingredientsList.length; index++) {
  ingredientsList[index].innerHTML = `<input type="checkbox" id="ingredient_${index + 1}"><label for="ingredient_${index + 1}">${ingredientsList[index].innerText}</label>`;
}
