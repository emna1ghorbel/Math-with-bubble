
const MUSIC_PATH = "../assets/audio/back.ogg"; 

let bgMusic = new Audio(MUSIC_PATH);
bgMusic.loop = true;
bgMusic.volume = 0.5;


let isSoundOn = localStorage.getItem("sound") === "on";


const musicBtn = document.getElementById("music-btn");


function updateMusicUI() {
    if (!musicBtn) return; 
    musicBtn.style.backgroundImage = isSoundOn
        ? "url('../assets/img/active.png')"
        : "url('../assets/img/nonactive.png')";
}


updateMusicUI();

if (isSoundOn) {
    bgMusic.play().catch(() => {
        console.log("🎵 Attente d'une interaction utilisateur pour jouer le son");
    });
}

// Toggle sound
if (musicBtn) {
    musicBtn.addEventListener("click", () => {
        isSoundOn = !isSoundOn;

        if (isSoundOn) {
            bgMusic.play();
            localStorage.setItem("sound", "on");
        } else {
            bgMusic.pause();
            localStorage.setItem("sound", "off");
        }

        updateMusicUI();
    });
}

// Activer le son automatiquement après première interaction
document.addEventListener("click", () => {
    if (isSoundOn && bgMusic.paused) {
        bgMusic.play();
    }
}, { once: true });
