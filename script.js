const button = document.getElementById("playBtn");
const audio = document.getElementById("audio");
const flash = document.getElementById("flash");

let flashing = false;
let interval;

button.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play();

    if (!flashing) {
        flashing = true;

        let white = true;

        interval = setInterval(() => {
            flash.style.backgroundColor = white
                ? "rgba(255,255,255,0.9)"
                : "rgba(0,0,0,0.9)";

            white = !white;
        }, 50);

        audio.onended = () => {
            clearInterval(interval);
            flash.style.backgroundColor = "transparent";
            flashing = false;
        };
    }
});
