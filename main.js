var letsCookBtn = document.querySelector(".letsCook");
var addRecipe = document.querySelector(".addRecipe");
var side = document.getElementById("side");
var mainDish = document.getElementById("mainDish");
var dessert = document.getElementById("dessert");
var entireMeal = document.getElementById("entireMeal");
var crockPot = document.querySelector(".centered")
var recipeForm = document.querySelector(".addRecipeSection")

letsCookBtn.addEventListener("click", showDish);
addRecipe.addEventListener("click", function(){
  recipeForm.classList.remove("hidden")
})

function randomDish(array){
  return array[Math.floor(Math.random() * array.length)];
}

function showDish(){
  var dishSelected = document.querySelector('input[name="dishOption"]:checked');
  var clickedBox = dishSelected.value;
  var allDishes ={
    sides: sides,
    mains: mains,
    desserts: desserts,
    entireMeal: [sides, mains, desserts]
  }
  var dishToDisplay = randomDish(allDishes[clickedBox])
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
     </div>`;
   }
}
