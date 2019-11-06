var slides = document.querySelector(".section_1");
count = 0;
function pig(){
    if(count == 2){
        count = 0;
    }else {
        count++;
    }
    slides.style.top=300*(-count)+"px";
}
window.setInterval("pig()", 2000);

var tab = document.querySelectorAll(".tab_1_1");
var btn = document.querySelectorAll(".btn_1");
function cat(n) {
var curerentbtn = document.querySelector(".btn_2");
var  curerenttab = document.querySelector(".tab_2_1");
if(curerentbtn){
	curerenttab.classList.remove("tab_2_1");
	curerentbtn.classList.remove("btn_2");
}
tab[n].classList.add("tab_2_1");
	btn[n].classList.add("btn_2");
}