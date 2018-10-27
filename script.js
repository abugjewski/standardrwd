const loginButton = document.querySelector(".top-bar__user-login")
const closeButton = document.querySelector(".login-bar__close")
const loginForm = document.querySelector(".login-bar")

loginButton.addEventListener("click", function(){
  loginForm.classList.toggle("login-bar__active")
})

closeButton.addEventListener("click", function(){
    loginForm.classList.toggle("login-bar__active")
})
