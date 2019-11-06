var tap=document.querySelectorAll(".tap");
var btn=document.querySelectorAll(".btn");

function taps(n) {
    var curerenttap=document.querySelector(".tap_1");
    var curerentbtn=document.querySelector(".btn_1");
    if(curerenttap){
        curerenttap.classList.remove("tap_1");
        curerentbtn.classList.remove("btn_1");
    }
    btn[n].classList.add("btn_1");
    tap[n].classList.add("tap_1");
}
