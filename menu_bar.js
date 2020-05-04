

var firstDiv = document.querySelector(".first-div");
var secondDiv = document.querySelector(".second-div");
var thirdDiv = document.querySelector(".third-div");
var menuDiv = document.getElementById("menu");
var iconMenu = document.querySelector(".icon-menu");

menuDiv.addEventListener("click",()=>{
    firstDiv.classList.toggle("first-div-ani");
    secondDiv.classList.toggle("second-div-ani");
    thirdDiv.classList.toggle("third-div-ani");
    iconMenu.classList.toggle("icon-menu-active");

})