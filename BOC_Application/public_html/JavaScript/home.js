//Retrieves the username from local storage to display on the home page
function welcome() {
    var username = localStorage.getItem("username");
    document.getElementById("welcomeText").innerHTML = "Welcome " + username + "!";
}