var letsCookBtn = document.querySelector(".letsCook");
var addRecipe = document.querySelector(".addRecipe");
var side = document.getElementById("side");
var mainDish = document.getElementById("mainDish");
var dessert = document.getElementById("dessert");
var entireMeal = document.getElementById("entireMeal");
var crockPot = document.querySelector(".centered")

letsCookBtn.addEventListener("click", showDish);
addRecipe.addEventListener("click", );

function randomDish(array){
return Math.floor(Math.random() * array.length);
}

function showDish(){
  var dishSelected = document.querySelector('input[name="dishOption"]:checked');
  var clickedBox = dishSelected.value;
  console.log(clickedBox);
  if(clickedBox === "side"){
    console.log(sides[randomDish(sides)])
    crockPot.innerHTML = `
    <div>
    <p class="italics">You should make:</p>
    <p class="recipeText">${sides[randomDish(sides)]}</p>
    </div>`
  }else if(clickedBox === "mains"){
    crockPot.innerHTML = `
    <div>
    <p class="italics">You should make:</p>
    <p class="recipeText">${mains[randomDish(mains)]}</p>
    </div>`
  } else if(clickedBox === "desserts"){
    crockPot.innerHTML = `
    <div>
    <p class="italics">You should make:</p>
    <p class="recipeText">${desserts[randomDish(desserts)]}</p>
    </div>`
  } else if(clickedBox === "entireMeal"){
    console.log("help")
    crockPot.innerHTML = `
    <div>
    <p class="italics">You should make:</p>
    <p class="recipeText">${mains[randomDish(mains)]} with a side of ${sides[randomDish(sides)]} and ${sides[randomDish(sides)]} for dessert!</p>
    </div>`
  }
}

function showRecipeForm(){

}
