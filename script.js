const button = document.querySelector("button");

button.addEventListener("click", function () {
    window.location.href = "login.html";
});const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
    loginBtn.addEventListener("click", function () {
        alert("Login system coming soon!");
    });
}