//~~~~~~~~~~~~~~~~~~~~Variables~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
var letsCookBtn = document.querySelector(".letsCook");
var addARecipeButton = document.querySelector(".addRecipe");
var side = document.getElementById("side");
var mainDish = document.getElementById("mainDish");
var dessert = document.getElementById("dessert");
var entireMeal = document.getElementById("entireMeal");
var crockPot = document.querySelector(".centered");
var recipeForm = document.querySelector(".addRecipeSection");
var addNewButton = document.querySelector(".addNewButton");
var newRecipeType = document.getElementById("recipeType");
var newRecipeName = document.getElementById("recipeName");
var allDishes ={
  sides: sides,
  mains: mains,
  desserts: desserts,
  entireMeal: [sides, mains, desserts]
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

function showDish(){
  var dishSelected = document.querySelector('input[name="dishOption"]:checked');
  var clickedBox = dishSelected.value;
  var dishToDisplay = randomDish(allDishes[clickedBox]);
  if(clickedBox === "entireMeal"){
    crockPot.innerHTML = `
    <div>
    <p class="italics">You should make:</p>
    <p class="recipeText">${randomDish(mains)} with a side of ${randomDish(sides)} and ${randomDish(desserts)} for dessert!</p>
    </div>`
  } else {
  crockPot.innerHTML = `
     <div>
     <p class="italics">You should make:</p>
     <p class="recipeText">${dishToDisplay}</p>
     </div>`
   }
}

function showCustomRecipe(){
  event.preventDefault();
  if (!allDishes[newRecipeType.value]){
     allDishes[newRecipeType.value] = [];
     allDishes[newRecipeType.value].unshift(newRecipeName.value);
  }
  allDishes[newRecipeType.value].unshift(newRecipeName.value);

  crockPot.innerHTML = `
     <div>
     <p class="italics">You should make:</p>
     <p class="recipeText">${newRecipeName.value}</p>
     </div>`

  hide(recipeForm);
  clearInputFields();
}
