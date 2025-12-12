<!-- MENU LATÉRAL -->
<div id="game-menu">
    <div class="menu-header">
        <h2><i class="fas fa-gamepad"></i> MATH WITH BUBBLE</h2>
        
    </div>
    
    
    <div class="info-card">
        <h3><i class="fas fa-star"></i> SCORE</h3>
        <span id="score">0</span>
    </div>
    
    <div class="info-card">
        <h3><i class="fas fa-clock"></i> TEMPS</h3>
        <span id="time">60</span>
    </div>
    
    <div class="info-card">
        <h3><i class="fas fa-bullseye"></i> CIBLE</h3>
        <span id="target">8</span>
    </div>
    
    <div class="equation-container">
        <h3><i class="fas fa-calculator"></i> ÉQUATION</h3>
        <div id="equation-display">Équation :</div>
    </div>
    
    <div class="message-container">
        <div id="message">Prêt à jouer !</div>
    </div>
    
    <div class="buttons-grid">
        <button class="menu-btn" id="pause-btn">
            <i class="fas fa-pause"></i> Pause
        </button>
        <button class="menu-btn secondary" id="clear">
            <i class="fas fa-eraser"></i> Effacer
        </button>
        <button class="menu-btn success" id="validate">
            <i class="fas fa-check"></i> Valider
        </button>
        <button class="menu-btn danger" id="quit-btn">
            <i class="fas fa-sign-out-alt"></i> Quitter
        </button>
    </div>
    
    <div class="info-card">
        <h3><i class="fas fa-info-circle"></i> RÈGLES</h3>
        <p style="font-size: 13px; line-height: 1.5; margin-top: 8px;">
            • Cliquez sur les bulles pour former une équation<br>
            • Le résultat doit égaler la cible<br>
            • Bulle verte (+T) : +5 secondes<br>
            • Bulle rouge (-T) : -5 secondes<br>
            
        </p>
    </div>
</div>
<!-- BOUTONS DE FIN -->
<div id="end-buttons">
    <div class="end-message" id="end-message"></div>
    <div class="end-buttons-container">
        <button class="end-btn primary" id="replay">
            <i class="fas fa-redo"></i> Rejouer
        </button>
        <button class="end-btn secondary" id="home">
            <i class="fas fa-home"></i> Accueil
        </button>
    </div>
</div>