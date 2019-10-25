const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".img_1:first-child");
const lastSlide = document.querySelector(".img_1:last-child");
const next = document.querySelector(".btn_1");
const prev = document.querySelector(".btn_2");
const MODALCLASS = "modalopen";
const modal = document.querySelector(".modal");
const openBtn = document.querySelector(".scn_1_1_1");
const closeBtn = document.querySelector(".btn_3");
const FIXESCLASS = "fix";
const nav = document.querySelector("nav");

const nextSlides = () => {
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    if (currentSlide) {
        currentSlide.classList.remove(SHOWING_CLASS);
        const nextSlide = currentSlide.nextElementSibling;
        if (nextSlide) {
            nextSlide.classList.add(SHOWING_CLASS);
        } else {
            firstSlide.classList.add(SHOWING_CLASS);
        }
    } else {
        firstSlide.classList.add(SHOWING_CLASS);
    }
};




const prevSlides = () => {
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    if (currentSlide) {
        currentSlide.classList.remove(SHOWING_CLASS);
        const prevSlide = currentSlide.previousElementSibling;
        if (prevSlide) {
            prevSlide.classList.add(SHOWING_CLASS);
        } else {
            lastSlide.classList.add(SHOWING_CLASS);
        }
    } else {
        lastSlide.classList.add(SHOWING_CLASS);
    }
};

const openmodal = () => {
    modal.classList.add(MODALCLASS);
}

const closemodal = () => {
    modal.classList.remove(MODALCLASS);
}


const fixed = () => {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add(FIXESCLASS);
    } else {
        nav.classList.remove(FIXESCLASS);
    }
}
nextSlides();
next.addEventListener("click", nextSlides);

prev.addEventListener("click", prevSlides);

openBtn.addEventListener("click", openmodal);

closeBtn.addEventListener("click", closemodal);

window.addEventListener("scroll", fixed);