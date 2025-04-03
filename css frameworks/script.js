window.onload = function () {

var video = document.getElementById("video");
var progress = document.getElementById("progress");
var time = document.getElementById("time");
var play = document.getElementById("play");
var pasue = document.getElementById("stop");
var back = document.getElementById("back");
var forward_back = document.getElementById("forward_back");
var forward = document.getElementById("forward_next");
var next = document.getElementById("next");
var volume = document.getElementById("volume");
var mute = document.getElementById("mute");
var speed = document.getElementById("speed");
var source = document.querySelectorAll("source");

volume.value = video.volume;
// progress.value = video.currentTime;
progress.max = video.duration;
progress.min , progress.value= 0;
// time.textContent = `${Math.floor(video.currentTime).toFixed(2)} / ${video.duration.toFixed(2)}`;

video.ontimeupdate = function () {
    progress.value = video.currentTime;
    time.textContent = `${Math.floor(video.currentTime).toFixed(2)} / ${video.duration.toFixed(2)}`;
}

progress.addEventListener("change", function () {
    video.currentTime = progress.value;
});


play.addEventListener("click", function () {
    video.play();
});

pasue.addEventListener("click", function () {
    video.pause();
});

forward_back.addEventListener("click", function () {
    video.currentTime -= 5;
});

forward.addEventListener("click", function () {
    video.currentTime += 5;
});

volume.addEventListener("change", function () {
    video.volume = volume.value;
});

mute.addEventListener("click", function () {
    video.muted = !video.muted;
});

speed.addEventListener("change", function () {
    video.playbackRate = speed.value;
});

nextOrPrevious = function () {
    var index = 0;
    for (var i = 0; i < source.length; i++) {
        if (source[i].src == video.src) {
            index = i;
        }
    }
    if (index == source.length - 1) {
        index = 0;

    } else {
        index++;
    }
    video.src = source[index].src;
    video.load();
    video.play();
}

next.addEventListener("click", nextOrPrevious);

back.addEventListener("click", nextOrPrevious);

video.addEventListener("click", function () {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

}