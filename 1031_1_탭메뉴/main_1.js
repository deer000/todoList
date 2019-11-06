var tab = document.querySelectorAll(".content_1");
var btn = document.querySelectorAll(".btn_1");
function cat(n) {
var curerentbtn = document.querySelector(".btn_2");
var curerenttab = document.querySelector(".content_2");
if(curerentbtn){
	curerenttab.classList.remove("content_2");
	curerentbtn.classList.remove("btn_2");
}
	tab[n].classList.add("content_2");
	btn[n].classList.add("btn_2");
}