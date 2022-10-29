$(document).ready(function () {
    $(".loading").css("display","flex");
  $(".loading").fadeOut(2000,function(){
    $("body").css("overflow","auto");
  });
  reload();
});
function openNav() {
    if ($("#mySidenav").width() == "250") {
        closeNav();
        console.log("00")
    } else {
        $("#mySidenav").width("250px");
       // head-nav
        //$("#h2-nav").css("margin-left", "250px");
        $(".head-nav").css("margin-left", "250px");
         $("#h2-nav").html(`<i class="fa-solid fa-xmark"></i>`);
        $("#search-container").css("margin-left", "20px");
    }
    // initation animation
new WOW().init();
}

function closeNav() {
    $("#mySidenav").width("0px");
    //$("#h2-nav").css("margin-left", "0px");
    $(".head-nav").css("margin-left", "0px");
    $("#search-container").css("margin-left", "10px");
    $("#h2-nav").html(`<i class="fa-solid fa-bars"></i>`);
}
var row = document.getElementById("rowData");
async function reload()
{
    x = await getCategories("list.php?a=list")
        arr = x.meals.splice(0, 20);
        
    displayArea() ;
}

async function getCategories(listBy) {
    x = await fetch(`https://www.themealdb.com/api/json/v1/1/${listBy}`);
    x = await x.json()
    return x;

}

function displayArea() {
    let e = ""
    for (var i = 0; i < arr.length; i++) e += `
    <div class="col-md-6 col-lg-3 my-3 myM  shadow">
        <div class="movie shadow rounded position-relative">
            <div onclick=(filterByArea('${arr[i].strArea}')) class="post ">
                <i class="fa-solid fa-city fa-3x"></i>
                <h2 class="text-white">${arr[i].strArea}</h2>
            </div>
        </div>
    </div>`
    row.innerHTML = e;
    $(".content-home1").css("height","auto");
    $("html, body").animate({
        scrollTop: 0
    }, 200)
}
async function filterByArea(area) {
    $(".loading-container").fadeIn(100)
    let meals = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    meals = await meals.json()
    displayMeals(meals.meals.slice(0, 20))
    $(".loading-container").fadeOut(500)
}
function displayMeals(arr) {

    let meals = ""
    for (let i = 0; i < arr.length; i++) {
        meals += `
        <div class="col-md-6 col-lg-3 my-3 myM  shadow w-25">
                  <div onclick="getMeal('${arr[i].idMeal}')" class="movie shadow rounded position-relative">
                      <div class="post ">
                          <div class="cont">
                              <img src='${arr[i].strMealThumb}' alt="Avatar" class="image">
                              <div class="overlay">
                                <div class="text"><h2>${arr[i].strMeal}</h2></div>
                              </div>
                            </div>
                        </div> 
                      </div>
                  </div>`


        
    }
    row.innerHTML = meals
    $("html, body").animate({
        scrollTop: 0
    }, 200)
}

//getMail
async function getMeal(mealID) {
    $(".loading").fadeIn(100)
    let meal = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    meal = await meal.json()
    displayMeal(meal.meals[0])
    $(".loading").fadeOut(500)
}

function displayMeal(meal) {
    let recipes = ""
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            recipes += `<li class="my-3 mx-1 p-1 alert alert-success rounded">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
        }
    }

    let tags = meal.strTags?.split(",") ////////////////////////////////////////////////////////////////////////
    let tagsStr = "" ///////////////////////////////////////////////////////////////////////////////////////////
    for (let i = 0; i < tags?.length; i++) { ///////////////////////////////////////////////////////////////////
        tagsStr += `<li class="my-3 mx-1 p-1 alert alert-danger rounded">${tags[i]}</li>` ////////////////////////////
    } ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    let str = `
    <div class="col-md-4 myM text-white">
					<img class="w-100" src="${meal.strMealThumb}" alt=""
						srcset=""><br>
					<h1>${meal.strMeal}</h1>
				</div>
				<div class="col-md-8 det myM text-white text-left">
					<h2>Instructions</h2>
					<p>${meal.strInstructions}</p>
					<p><b class="fw-bolder">Area :</b> ${meal.strArea}</p>
					<p><b class="fw-bolder">Category :</b> ${meal.strCategory}</p>
					<h3>Recipes :</h3>
					<ul class="d-flex " id="recipes">
					</ul>

					<h3 class="my-2 mx-1 p-1">Tags :</h3>
					<ul class="d-flex " id="tags">
					</ul>

					
					<a class="btn btn-success text-white" target="_blank" href="${meal.strSource}">Source</a>
					<a class="btn youtube text-white" target="_blank" href="${meal.strYoutube}">Youtub</a>
				</div>`
    row.innerHTML = str
    document.getElementById("recipes").innerHTML = recipes
    document.getElementById("tags").innerHTML = tagsStr
    $("html, body").animate({
        scrollTop: 0
    }, 200)

}