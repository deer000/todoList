const back = document.querySelector(".back");
const nav = document.querySelector("nav");

nav.addEventListener("mouseover", function() {
    back.style.height = "300px";
});

nav.addEventListener("mouseout", function() {
    back.style.height = "0px";
});