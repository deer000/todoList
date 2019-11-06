var slides = document.querySelector(".slide_box_1");
count = 0;
function deer() {
    if(count == 2) {
        count = 0;
    }else {
        count++;
    }
    slides.style.left=1000*(-count)+"px";
}
window.setInterval("deer()", 1500);