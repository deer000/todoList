var slides = document.querySelector(".slide_box_1");
count = 0;
function get() {
    if(count == 4) {
        count = 0;
    }else {
        count++;
    }
    slides.style.left=900*(-count)+"px";
}
window.setInterval("get()", 2000);