var slides = document.querySelector(".slide_box_1");
var count = 0;
function dog() {
	if(count == 3){
		count = 0;
	}else{
		count++;
	}
	slides.style.left= 900*(-count) + "px";
		}
		window.setInterval("dog()", 2000);