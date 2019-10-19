const video = document.getElementById("my_vd");
const btn = document.getElementById("btn_1");
const start = document.getElementById("ang");
const mute = document.getElementById("mute");

function deer() {
    if (video.paused) {
        video.play();
        mute.style.display = "block";
        start.style.display = "none";
    } else {
        video.pause();
        start.style.display = "block";
        mute.style.display = "none";

    }
}

deer();
btn.addEventListener("click", deer);