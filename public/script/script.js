
let username = document.getElementById('username');
let flag = 1;
let pwds = document.getElementById('pwd');
function validateForm() {
    if (username.value.length < 3) {
        document.getElementById("user__error").innerHTML = " username should have more than 3 char";
        return false;
        flag = 0;
    }
    else if (pwds.value.length == 0) {
        document.getElementById("pwd__error").innerHTML = "Please enter password";
        return false;
        flag = 0;

    }
    else {
        document.getElementById("user__error").innerHTML = "";
        document.getElementById("pwd__error").innerHTML = "";
        flag = 1;
    }


}
