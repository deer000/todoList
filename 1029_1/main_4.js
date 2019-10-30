var slides = document.querySelector(".slider_box_1");
count = 0;
function cat(){
    if(count == 4) {
        count = 0;
    }else{
        count++;
    }
    slides.style.bottom=600*(-count)+"px";
}
setInterval(cat, 2000);