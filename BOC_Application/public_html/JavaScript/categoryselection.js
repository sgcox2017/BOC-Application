//List of possible categories
var categoryList = ["prevention", "evaluation", "care", "rehab", "health", "other"];

//Minimum and maximum lengths for the category list
var min = 0;
var max = categoryList.length - 1;

//Sets the category selected into the local storage. If random is chosen, a category is randomly selcted from the list
function selectCategory(categoryId) {
    if(categoryId === "random") {
        var randomInt = getRandomInt()
        localStorage.setItem("category", categoryList[randomInt]);
        localStorage.setItem("categoryName", document.getElementById(categoryId).value);
        location.replace("questionselection.html");
    }
    else {
        localStorage.setItem("category", categoryId);
        localStorage.setItem("categoryName", document.getElementById(categoryId).value);
        location.replace("questionselection.html");
    }
}

//Retrieves a random integer between the min and max variables
function getRandomInt() {
    min = Math.ceil(min);
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min)) + min;
}