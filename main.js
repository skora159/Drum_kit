window.addEventListener("keydown", function (event) {
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("play");

})
window.addEventListener("keyup", function () {
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!key) return;
    key.classList.remove("play");
})