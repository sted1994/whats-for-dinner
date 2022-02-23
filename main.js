//~~~~~~~~~~~~~~~~~~~~Variables~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
var letsCookBtn = document.querySelector(".letsCook");
var addARecipeButton = document.querySelector(".addRecipe");
var crockPot = document.querySelector(".centered");
var recipeForm = document.querySelector(".addRecipeSection");
var addNewButton = document.querySelector(".addNewButton");
var newRecipeType = document.getElementById("recipeType");
var newRecipeName = document.getElementById("recipeName");
var recipeText = "";
var allDishes ={
  "side": sides,
  "main dish": mains,
  "dessert": desserts,
  "entire meal": [sides, mains, desserts]
};

//~~~~~~~~~~~~~~~~Event Listeners~~~~~~~~~~~~~~~~~~~~~~~~//
letsCookBtn.addEventListener("click", showDish);
addARecipeButton.addEventListener("click", function(){
  show(recipeForm)
});
addNewButton.addEventListener("click", showCustomRecipe);

//~~~~~~~~~~~~~~~~~~~~Functions~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
function hide(element){
  element.classList.add("hidden");
}

function show(element){
  element.classList.remove("hidden");
}

function clearInputFields(){
  newRecipeType.value = "";
  newRecipeName.value = "";
}

function randomDish(array){
  return array[Math.floor(Math.random() * array.length)];
}

function buildMeal(){
  var dishSelected = document.querySelector('input[name="dishOption"]:checked');
  var dishToDisplay = randomDish(allDishes[dishSelected.value]);
  if(dishSelected.value === "entire meal"){
    recipeText= `${randomDish(mains)} with a side of ${randomDish(sides)} and ${randomDish(desserts)} for dessert!`
  } else {
    recipeText = dishToDisplay
  }
}

function injectHtml(){
crockPot.innerHTML = `
<div>
<p class="italics">You should make:</p>
<p class="recipeText">${recipeText}</p>
</div>`
}

function showDish(){
  buildMeal();
  injectHtml();
}

function showCustomRecipe(){
  event.preventDefault();
  if (!allDishes[newRecipeType.value]){
     allDishes[newRecipeType.value] = [];
     allDishes[newRecipeType.value].unshift(newRecipeName.value);
  } else {
    allDishes[newRecipeType.value].unshift(newRecipeName.value);
  }
  recipeText= newRecipeName.value
  injectHtml()
  hide(recipeForm);
  clearInputFields();
}
