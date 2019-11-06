var slides = document.querySelector(".slider_box_1");
var count = 0;
function rightSlide() {
    if(count == 4) {
        count=0;
    } else {
        count++;
    }
    slides.style.left = 800*(-count)+"px";
}

setInterval(rightSlide, 2000);