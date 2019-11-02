var tab = document.querySelectorAll(".tab");
var btn = document.querySelectorAll(".btn");

function tabs(n) {
    var curerenttab = document.querySelector(".tab_1");
    var curerentbtn = document.querySelector(".btn_1");
    if(curerenttab){
        curerenttab.classList.remove("tab_1");
        curerentbtn.classList.remove("btn_1");
    }
    btn[n].classList.add("btn_1");
    tab[n].classList.add("tab_1");
}