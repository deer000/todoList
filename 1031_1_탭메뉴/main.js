var tap = document.querySelectorAll(".bl");
var btn = document.querySelectorAll(".btn_1");
function cat(n) {
var curerentbtn = document.querySelector(".btn_2");
var  curerenttap = document.querySelector(".bl_1");
if(curerentbtn){
	curerenttap.classList.remove("bl_1");
	curerentbtn.classList.remove("btn_2");
}
	tap[n].classList.add("bl_1");
	btn[n].classList.add("btn_2");
}