var username            = document.getElementById("username");
var password            = document.getElementById("password");
var newUsername         = document.getElementById("newUsername");
var newPassword         = document.getElementById("newPassword");
var newConfirmPassword  = document.getElementById("newConfirmPassword");
var newEmail            = document.getElementById("newEmail");
var newSecurityQuestion = document.getElementById("newSecurityQuestion");
var newSecurityAnswer   = document.getElementById("newSecurityAnswer");
var forgotUsername      = document.getElementById("forgotUsername");

function showCreateAccount() {
    document.getElementById("login").style.display="none";
    document.getElementById("forgotPassword").style.display="none";
    document.getElementById("newAccount").style.display="block";
    newUsername.value = "";
    newPassword.value ="";
    newConfirmPassword.value ="";
    newEmail.value ="";
    newSecurityQuestion.value ="";
    newSecurityAnswer.value = "";
}

function showForgotPassword() {
    document.getElementById("newAccount").style.display="none";
    document.getElementById("login").style.display="none";
    document.getElementById("forgotPassword").style.display="block";
    forgotUsername.value="";
}

function showLogin() {
    document.getElementById("forgotPassword").style.display="none";
    document.getElementById("newAccount").style.display="none";
    document.getElementById("login").style.display="block";
    username.value="";
    password.value="";
}

function validateNewUser() {
    var errors = [];
    
    //Checks if values are empty
    if(newUsername.value === null) {
        newUsername.style.border = "1px solid red";
        errors.push("The username field is blank.");
    }
    
    if(newPassword.value === null) {
        newPassword.style.border = "1px solid red";
        errors.push("The password field is blank.");
    }
    
    if(newEmail.value === null) {
        newEmail.style.border = "1px solid red";
        errors.push("The email field is blank.");
    }
    //Checks the email address is valid
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newEmail.value)) {
        newEmail.style.border = "1px solid red";
        errors.push("Please enter a valid email address.");
    }
    
    if(newSecurityQuestion.value === null) {
        newSecurityQuestion.style.border = "1px solid red";
        errors.push("The security question field is blank.");
    }
    
    if(newSecurityAnswer.value === null) {
        newSecurityAnswer.style.border = "1px solid red";
        errors.push("The security answer is blank.");
    }
    
    //Checks uniqueness of new username
    if (true) {
        newUsername.style.border = "1px solid red";
        errors.push("The username you've entered is already in use.");
    }
    
    //Checks both passwords match
    if (newPassword.value !== newConfirmPassword.value) {
        newPassword.style.border = "1px solid red";
        errors.push("The passwords do not match.");
    }
    
       
    //Prints out all errors otherwise submits the form
    if(errors.length > 0) {
        var errorText = "";
        for(i = 0; i < errors.length; ++i) {
            errorText += errors[i] + "\n";
        }
        alert(errorText);
    }
    else {
        
    }
}
