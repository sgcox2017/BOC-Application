//Hardcoded iist of users
var user1 = {username:"sgcox2017", password:"fred", email:"sgcox2017@manchester.edu", securityquestion:"street", securityanswer:"mccrumm st."};
var user2 = {username:"rjauker2017", password:"fred", email:"rjauker2017@manchester.edu", securityquestion:"town", securityanswer:"huntington"};
var users = [user1, user2];

//Variable which holds the username beyond this page
var username="";

//Variable to hold the list of errors
var errors;

//Shows the create account section for the login page. Clears any of data previously input
function showCreateAccount() {
    document.getElementById("login").style.display="none";
    //document.getElementById("forgotPassword").style.display="none";
    document.getElementById("newAccount").style.display="block";
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value ="";
    document.getElementById("newConfirmPassword").value ="";
    document.getElementById("newEmail").value ="";
    document.getElementById("newSecurityQuestion").value ="";
    document.getElementById("newSecurityAnswer").value = "";
}

//Shows the create account section for the login page. Clears any of data previously input
function showForgotPassword() {
    document.getElementById("newAccount").style.display="none";
    document.getElementById("login").style.display="none";
    document.getElementById("forgotPassword").style.display="block";
    document.getElementById("forgotUsername").value="";
}

//Shows the create account section for the login page. Clears any of data previously input
function showLogin() {
    //document.getElementById("forgotPassword").style.display="none";
    document.getElementById("newAccount").style.display="none";
    document.getElementById("login").style.display="block";
    document.getElementById("username").value="";
    document.getElementById("password").value="";
}

//Validates the data for a user attempting to login
function validateLogin() {
    //Cycles through all the users
    for(i = 0; i < users.length; ++i) {
        if(document.getElementById("username").value === users[i].username) {
            document.getElementById("username").style.border = "1px solid grey";
            if(document.getElementById("password").value !== "" && document.getElementById("password").value === users[i].password) {
                document.getElementById("password").style.border = "1px solid grey";
                localStorage.setItem("username", users[i].username);
                location.replace("home.html");
            }
            else {
                document.getElementById("password").style.border = "1px solid red";
                alert("The password entered does not match with the username.");
            }
            break;
        }
        else {
            if(i === (users.length-1)) {
                document.getElementById("username").style.border = "1px solid red";
                alert("The username entered does not exist");
            }
        }
    }
}

//Validates the data for a new user attempting to be created
function validateNewUser() {
    errors = [];
    
    //Checks if the username already exists
    for(i = 0; i < users.length; ++i) {
        if(document.getElementById("newUsername") === users[i].firstname) {
            document.getElementById("newUsername").style.border = "1px solid red";
            errors.push("The username entered is currently in use.");
        }
    }
    
    //Checks if the username is empty
    if(document.getElementById("newUsername").value === "") {
        document.getElementById("newUsername").style.border = "1px solid red";
        errors.push("Please enter a valid username.");
    }
    else {
        document.getElementById("newUsername").style.border = "1px solid grey";
    }
    
    //Checks both passwords match
    if (document.getElementById("newPassword").value !== document.getElementById("newConfirmPassword").value) {
        document.getElementById("newPassword").style.border = "1px solid red";
        errors.push("The passwords do not match.");
    }
    else {
        document.getElementById("newPassword").style.border = "1px solid grey";
    }
    
    //Checks if the passowrd is empty
    if(document.getElementById("newPassword").value === "") {
        document.getElementById("newPassword").style.border = "1px solid red";
        errors.push("Please enter a valid password.");
    }
    else {
        document.getElementById("newPassword").style.border = "1px solid grey";
    }
    
    //Checks if the confirmed password is empty
    if(document.getElementById("newConfirmPassword").value === "") {
        document.getElementById("newConfirmPassword").style.border = "1px solid red";
        errors.push("Please confirm your password.");
    }
    else {
        document.getElementById("newConfirmPassword").style.border = "1px solid grey";
    }
    
    //Checks if the email address is valid
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("newEmail").value)) {
        document.getElementById("newEmail").style.border = "1px solid red";
        errors.push("Please enter a valid email address.");
    }
    else {
        document.getElementById("newEmail").style.border = "1px solid grey";
    }
    
    //Checks if the security question is empty
    if(document.getElementById("newSecurityQuestion").value === "") {
        document.getElementById("newSecurityQuestion").style.border = "1px solid red";
        errors.push("Please select a security question.");
    }
    else {
        document.getElementById("newSecurityQuestion").style.border = "1px solid grey";
    }
    
    //Checks if the security answer is empty
    if(document.getElementById("newSecurityAnswer").value === "") {
        document.getElementById("newSecurityAnswer").style.border = "1px solid red";
        errors.push("Please enter a valid security question answer.");
    }
    else {
        document.getElementById("newSecurityAnswer").style.border = "1px solid grey";
    }
                    
    //Prints out all errors otherwise submits the form and opens the home page
    if(errors.length > 0) {
        var errorText = "";
        for(i = 0; i < errors.length; ++i) {
            errorText += errors[i] + "\n";
        }
        alert(errorText);
    }
    else {
        alert("User successfully created");
        location.replace("home.html");
    }
}