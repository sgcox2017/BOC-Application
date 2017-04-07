
function showCreateAccount() {
    document.getElementById("login").style.display="none";
    document.getElementById("username").value="";
    document.getElementById("password").value="";
    document.getElementById("forgotPassword").style.display="none";
    document.getElementById("forgotUsername").value="";
    document.getElementById("newAccount").style.display="block";
}

function showForgotPassword() {
    document.getElementById("newAccount").style.display="none";
    document.getElementById("newUsername").value="";
    document.getElementById("newPassword").value="";
    document.getElementById("newConfirmPassword").value="";
    document.getElementById("newEmail").value="";
    document.getElementById("newSecurityQuestion").value="";
    document.getElementById("newSecurityAnswer").value="";
    document.getElementById("password").value="";
    document.getElementById("login").style.display="none";
    document.getElementById("username").value="";
    document.getElementById("password").value="";
    document.getElementById("forgotPassword").style.display="block";
}

function showLogin() {
    document.getElementById("forgotPassword").style.display="none";
    document.getElementById("forgotUsername").value="";
    document.getElementById("newAccount").style.display="none";
    document.getElementById("newUsername").value="";
    document.getElementById("newPassword").value="";
    document.getElementById("newConfirmPassword").value="";
    document.getElementById("newEmail").value="";
    document.getElementById("newSecurityQuestion").value="";
    document.getElementById("newSecurityAnswer").value="";
    document.getElementById("login").style.display="block";
}

