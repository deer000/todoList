var slides = document.querySelector(".slide_box_1");
var count = 0;
function fox(){
    if(count == 4){
        count = 0;
    }else {
        count++;
    }
    slides.style.right=500*(-count)+"px";
}
setInterval(fox, 2000);