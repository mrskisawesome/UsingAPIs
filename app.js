console.log("Let's make some cocktails");

async function getMyStuff() {
  //make the request to the api - ensure the address has https:// at the start
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin"
  );
  console.log("HTTP Response:", response);
  //turn the response into JSON
  const json = await response.json();
  console.log("JSON Data:", json);

  return json;
}
/*to do
async function getFullDetails() {
  //make the request to the api - ensure the address has https:// at the start
  const response = await fetch(
    "www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007"
  );
  console.log("HTTP Response:", response);
  //turn the response into JSON
  const json = await response.json();
  console.log("JSON Data:", json);

  return json;
}*/
async function showRecipes() {
  //make put the json data into the constant data
  const data = await getMyStuff();

  //find the ul DOM on the html page
  const wholeSection = document.getElementById("cocktailList");

  //add each item into the array as a li in the ul
  for (let i = 0; i < data.drinks.length; i++) {
    //make a div for each item
    const cocktailItem = document.createElement("div");
    cocktailItem.classList.add("cocktail-item");

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("name-column");
    nameDiv.textContent = data.drinks[i].strDrink;

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image-column");

    const cocktailImage = document.createElement("img");
    cocktailImage.classList.add("drink-image");
    cocktailImage.src = data.drinks[i].strDrinkThumb;
    cocktailImage.alt = data.drinks[i].strDrink;
    cocktailImage.width = 100;

    imageDiv.appendChild(cocktailImage);

    cocktailItem.appendChild(nameDiv);
    cocktailItem.appendChild(imageDiv);

    wholeSection.appendChild(cocktailItem);
  }
}

showRecipes();

async function getIDs() {
  //make put the json data into the constant data
  const data = await getMyStuff();
  let IDArray = [];
  for (let i = 0; i < data.drinks.length; i++) {
    const ID = data.drinks[i].idDrink;
    IDArray.push(ID);
  }
  console.log(IDArray);
}

let IDArray = getIDs();
/* create one li element for each item in the data set
 const firstDiv = document.createElement("div");
 //give the list which we are about to make a class
 firstDiv.classList.add("cocktail-item");
 //make a div and assign it the class image-column
 const imageDiv = document.createElement("div");
 imageDiv.classList.add("image-column");
 //make a div and assign it the class name-column
 const nameDiv = document.createElement("div");
 nameDiv.classList.add("name-column");
 //add the text to the li
 nameDiv.textContent = data.drinks[i].strDrink;

 //add image bit in here and rel tag into html
 const cocktailImage = document.createElement("img");
 //assign a class to the images
 cocktailImage.classList.add("drink-image");
 // Set the image source to the drink's thumbnail
 cocktailImage.src = data.drinks[i].strDrinkThumb;
 // Set some attributes for the image element
 cocktailImage.alt = data.drinks[i].strDrink; // Alt text for accessibility
 cocktailImage.width = 100; // Sets the width - let's see if this looks right
 //append the cocktailImage to the imageDiv
 imageDiv.appendChild(cocktailImage);
 //append the cocktail name to the list item
 firstDiv.appendChild(nameDiv);
 // Add the image to the list item
 firstDiv.appendChild(cocktailImage);

 wholeSection.appendChild(li);
}
} ARCHIVED 

//const lis = document.querySelectorAll("li"); //an array of dom nodes

/*for (let i=0; i<lis.length; i++) {
    lis[i].addEventListener("click", function ()){
        lis[i].classList.toggle("completed"); //finds the class of each item and changes it to .completed
    }
};

const data = ["Abbie's washing", "get Oak work", "sort personal accounts" ];

//add our items to the ul
//const ul = document*/
