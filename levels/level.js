

function finishLevel(level,score) {
    console.log("finishLevel appelé pour le niveau", level,score);

    fetch("http://localhost/bubble_emma/levels/update_level.php", {
         method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `level=${level}&score=${score}`
        
    })
    .then(response => response.text())
    .then(data => {
        console.log("Réponse du PHP:", data);
    })
    .catch(error => console.error("Erreur fetch:", error));
}
function playSound(url) {
    
    const audio = new Audio(url); // crée un objet Audio avec le fichier
    audio.play(); // joue le son
}

function startLevel(options) {
    const equations = options.equations;
    const bubbleValues = options.bubbleValues ;
    const bubbleCount = options.bubbleCount ;
    const timeLimit = options.timeLimit ;
    const levelNumber = options.levelNumber ;
    const levelSpeeds = [2, 2.5, 3, 3.5];

    let currentEquationIndex = 0;
    let userEquation = [];
    let timeLeft = timeLimit;
    let score = 0;
    let timerInterval;
    let isPaused = false;

    // DOM
    const display = document.getElementById("equation-display");
    const message = document.getElementById("message");
    const targetDisplay = document.getElementById("target");
    const endButtons = document.getElementById("end-buttons");
    const endMessage = document.getElementById("end-message");
    const scoreDisplay = document.getElementById("score");
    const timeDisplay = document.getElementById("time");

    targetDisplay.textContent = equations[currentEquationIndex];
    timeDisplay.textContent = timeLeft;
    scoreDisplay.textContent = score;

// Fonction principale pour lancer un niveau




function startTimer() {
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            if (!isPaused) {
                if(timeLeft <= 0 ){
                clearInterval(timerInterval);
                playSound('../assets/audio/sorry.mp3'); 
                endGame("fin de jeu");
                return;
            
            }
                timeLeft--;
                timeDisplay.textContent = timeLeft;

                if (timeLeft <= 10){ timeDisplay.classList.add("time-low");
                
                }
                
                else timeDisplay.classList.remove("time-low");

                
            }
        }, 1000);
    }


startTimer();

// ======== CRÉATION DES BULLES ========
const bubbles = [];

for(let i = 0; i < bubbleCount; i++) {
    createBubble();
}

function createBubble(type = "normal") {
    if(!isPaused){
    const b = document.createElement("div");
    b.className = "bubble";
    
    if (type === "bonus") b.classList.add("bonus");
    if (type === "danger") b.classList.add("danger");

    b.textContent = type === "normal" ? 
        bubbleValues[Math.floor(Math.random() * bubbleValues.length)] : 
        (type === "bonus" ? "+T" : "-T");
    
    b.dataset.value = b.textContent;
    
   
    // b.style.bottom = `-${Math.random() * 120}px`;
    
    const size = 40 + Math.random() * 60;
    b.style.width = `${size}px`;
    b.style.height = `${size}px`;
    
    // Position horizontale aléatoire
    b.style.left = `${Math.random() * 100}%`;
    
    // Opacité variable
    const opacity = 0.4 + Math.random() * 0.45;
    b.style.setProperty('--opacity', opacity);
    
    // Dérive horizontale
    const drift = (Math.random() * 40) - 20;
    b.style.setProperty('--drift', `${drift}px`);
    
    // Animation
   
    
    // Couleur
    const colors = ['#6a5af9', '#4cc9f0', '#ff6b9d', '#2ecc71', '#f39c12'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    b.style.background = `radial-gradient(circle at 30% 30%, ${color}40, ${color}10)`;
    b.style.borderColor = `${color}80`;
    b.style.boxShadow = `inset 5px -5px 10px ${color}`;

    // Position aléatoire en bas (originale)
    b.style.left = Math.random() * (window.innerWidth - 320 - size) + "px";
    b.style.top = window.innerHeight + Math.random() * 300 + "px";

    document.body.appendChild(b);
    
    bubbles.push({
        el: b,
        x: b.offsetLeft,
        y: parseFloat(b.style.top),
        speed: levelSpeeds[levelNumber+1] + Math.random() * 1,
        type: type
    });

    // CLIC SUR BULLE (RÈGLES ORIGINALES)
    b.addEventListener("click", () => {
        playSound('../assets/audio/bubble.wav'); 
        if (type === "bonus") { 
            timeLeft += 5; 
            message.textContent = "⏱ +5s !"; 
            message.style.color = "lightgreen"; 
        }
        else if (type === "danger") { 
            timeLeft -= 5; 
            message.textContent = "⏱ -5s !"; 
            message.style.color = "red"; 
        }
        else {
            userEquation.push(b.dataset.value);
            updateEquationDisplay();
            
        }
        
        if (type !== "normal") {
            b.remove();
            // Retirer de la liste des bulles
            const index = bubbles.findIndex(bubble => bubble.el === b);
            if (index > -1) bubbles.splice(index, 1);
        }
    });
}}

// ======== MISE À JOUR ÉQUATION ========
function updateEquationDisplay() {
    display.textContent = "Équation : " + userEquation.join(" ");
}

// ======== BOUTONS DU MENU ========

// Pause
document.getElementById("pause-btn").addEventListener("click", () => {
    isPaused = !isPaused;
    const btn = document.getElementById("pause-btn");
    
    if (isPaused) {
        btn.innerHTML = '<i class="fas fa-play"></i> Reprendre';
        message.textContent = "⏸ Jeu en pause";
        message.style.color = "#3498db";
        
    } else {
        btn.innerHTML = '<i class="fas fa-pause"></i> Pause';
        message.textContent = "";
        startTimer();
    }
});

// Effacer
document.getElementById("clear").addEventListener("click", () => {
    userEquation = [];
    message.textContent = "";
    updateEquationDisplay();
});

// Valider 
// function validateEquation() {
//     if (userEquation.length === 0) {
//         message.textContent = "⚠️ Choisis des bulles !";
//         message.style.color = "yellow";
//         return false;
//     }
    
//     const equation = userEquation.join("");
//     let result;
    
//     try { 
//         result = eval(equation); 
//     } catch(e) { 
//         message.textContent = "❌ Équation invalide !";
//         message.style.color = "red";
//         return false;
//     }
    
//     if (result === equations[currentEquationIndex]) {
//         message.textContent = `✅ Correct ! ${equations[currentEquationIndex]} 🎉`;
//         message.style.color = "lightgreen";
        
//         // Augmenter le score
//         score += 10;
//         console.log("Score mis à jour :", score);
//         condole.log("Score affiché avant mise à jour :", length(equation));
//         scoreDisplay.textContent = score;

        
//         currentEquationIndex++;
        
//         if (currentEquationIndex < equations.length) {
//             userEquation = [];
//             updateEquationDisplay();
//             targetDisplay.textContent = equations[currentEquationIndex];
//         } else {
//             endGame("🏆 Bravo ! Toutes les équations terminées !", true);
//         }
//         return true;
//     } else {
//         message.textContent = "🔥 Tu t’améliores à chaque essai !";
//         message.style.color = "orange";
//         return false;
//     }
// }

document.getElementById("validate").addEventListener("click", () => {
    if (userEquation.length === 0) {
        message.textContent = "⚠️ Choisis des bulles !";
        message.style.color = "yellow";
        return;
    }
    
    const equation = userEquation.join("");
    let result;
    
    try { 
        result = eval(equation); 
    } catch(e) { 
        message.textContent = "❌ Équation invalide !";
        message.style.color = "red";
        return;
    }
    
    if (result === equations[currentEquationIndex]) {
        message.textContent = `✅ Correct ! ${equations[currentEquationIndex]} 🎉`;
        message.style.color = "lightgreen";
        
        // Augmenter le score
        console.log("Score mis à jour :", score);
        console.log("Longueur de l'équation :", equation.length);
        score += 10 + equation.length;
        scoreDisplay.textContent = score;
        
        currentEquationIndex++;
        
        if (currentEquationIndex < equations.length) {
            userEquation = [];
            updateEquationDisplay();
            targetDisplay.textContent = equations[currentEquationIndex];
        } else {
            playSound('../assets/audio/winner.mp3'); 
             endGame("🏆 Bravo ! Toutes les équations terminées !", true);
             

        }
    } else {
        message.textContent = "❌ Incorrect ! Réessaie.";
        message.style.color = "red";
    }
});

// Quitter
document.getElementById("quit-btn").addEventListener("click", () => {
    if (confirm("Voulez-vous vraiment quitter ?")) {
        window.location.href = "../php/index.php";
    }
});

// ======== ANIMATION BULLES VERS LE HAUT ========
function animate() {
    
        
    
    bubbles.forEach(b => {
        if(!isPaused ) b.x-= b.speed;
        
        if (b.y < -60) {
            b.y = window.innerHeight + Math.random() * 200;
            b.x = Math.random() * (window.innerWidth - 320 - 60);
            
            const r = Math.random();
            if (r < 0.05) createBubble("bonus");
            else if (r < 0.1) createBubble("danger");
        }
        
        b.el.style.top = b.y + "px";
        b.el.style.left = b.x + "px";
    });


    requestAnimationFrame(animate);}


animate();

// ======== FIN DU JEU ========
function endGame(msg, completed = false) {
    message.textContent = msg;
    message.style.color = "orange";
    
    // Bloquer les bulles
    bubbles.forEach(b => b.el.style.pointerEvents = "none");
    
    // Afficher le panneau de fin
    endMessage.textContent = msg;
    endButtons.style.display = "flex";

    // Arrêter le timer
    clearInterval(timerInterval);

    // Mettre à jour le niveau uniquement si terminé
    if (completed) {
        finishLevel(levelNumber+1,score); // Passe au level suivant et modifier le score
    }
}



// ======== BOUTONS DE FIN ========
document.getElementById("replay").addEventListener("click", () => location.reload());
document.getElementById("home").addEventListener("click", () => window.location.href = "../php/index.php");

// Redimensionnement
window.addEventListener('resize', () => {
        bubbles.forEach(b => {
        const maxLeft = window.innerWidth - 320 - 60;
        b.x = Math.min(b.x, maxLeft);
        b.el.style.left = b.x + "px";
    });
});}