/* Sign In Button  */
const form = document.getElementById("loginForm");
form.addEventListener("submit", function(event){
event.preventDefault();

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
const error = document.getElementById("error");

if(username === "admin" && password === "admin123"){
    /* Store user data in browser */
localStorage.setItem("user", username);

alert("Login Successful");
window.location.href = "index.html";

}else{
error.textContent = "Invalid username or password";
}

});

