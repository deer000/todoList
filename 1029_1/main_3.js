var slides = document.querySelector(".slider_box_1");
count = 0;
function rabbit(){
    if(count == 4) {
        count = 0;
    }else {
        count++;
    }
    slides.style.top=600*(-count)+"px";
}
setInterval(rabbit, 2000);