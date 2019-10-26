// class모음
var SHOWINGCLASS = "showing";
// Element
var firstSlide = document.querySelector(".slide_idems:first-child")
var nextBtn = document.querySelector(".next");
var lastSlide = document.querySelector(".slide_idems:last-child")
var prevBtn = document.querySelector(".prev");
// function
function nextSlides() {
    var currentSlide = document.querySelector(`.${SHOWINGCLASS}`);
    if (currentSlide) {
        currentSlide.classList.remove(SHOWINGCLASS);
        var nextSlides = currentSlide.nextElementSibling;

        if (nextSlides) {
            nextSlides.classList.add(SHOWINGCLASS);
        } else {
            firstSlide.classList.add(SHOWINGCLASS);
        }
    } else {
        firstSlide.classList.add(SHOWINGCLASS);
    }
}

function prevSlides() {
    var currentSlide = document.querySelector(`.${SHOWINGCLASS}`);
    if (currentSlide) {
        currentSlide.classList.remove(SHOWINGCLASS);
        var prevSlides = currentSlide.previousElementSibling;

        if (prevSlides) {
            prevSlides.classList.add(SHOWINGCLASS);
        } else {
            lastSlide.classList.add(SHOWINGCLASS);
        }
    } else {
        lastSlide.classList.add(SHOWINGCLASS);
    }
}
// playin function
nextSlides();
nextBtn.addEventListener("click", nextSlides);
prevBtn.addEventListener("click", prevSlides);