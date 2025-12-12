document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('bubbles-container');
  if (!container) return;
  const bubbleCount = 20;
  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.bottom = `-${150+Math.random() * 20}px`;
    
    const size = 100 + Math.random() * 50;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Position horizontale aléatoire
    bubble.style.left = `${Math.random() * 100}%`;

    // Opacité variable
    const opacity = 0.5 + Math.random() * 0.45;
    bubble.style.setProperty('--opacity', opacity);//nstmlouhafy keyframes

    // Dérive horizontale
    const drift = (Math.random() * 40) - 20;
    bubble.style.setProperty('--drift', `${drift}px`);

    // Animation
    bubble.style.animationDuration = `${10 + Math.random() * 10}s`;
    bubble.style.animationDelay = `${Math.random() * 5}s`;

    // Couleur du contour/lueur
    const colors = ['#6a5af9', '#7e5bef', '#4cc9f0', '#56cfe1', '#8a7cf0', ' #e74c3c;', '#f39c12', '#27ae60'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    bubble.style.color = color;

    bubble.style.boxShadow = `inset 5px -5px 10px  ${color}`;
     // Création du "before" comme élément enfant
  const before = document.createElement('div');
  before.classList.add('bubble-before');

  // Taille synchronisée avec la bulle (ex: 20% de la taille de la bulle)
  const beforeSize = size * 0.1;
  before.style.width = `${beforeSize}px`;
  before.style.height = `${beforeSize}px`;

  // Position relative à la bulle
  before.style.top = `${size * 0.2}px`;
  before.style.left = `${size * 0.7}px`;

  bubble.appendChild(before);
  container.appendChild(bubble);
  }
});
//signin form validation
document.getElementById('signinForm')?.addEventListener('submit', function(e) {
      e.preventDefault();//verifier les champs avant soubmission
      let valid = true;
    

      const email = document.getElementById('email').value.trim();
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     
      if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerHTML = "Adresse e-mail invalide.";
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('email').classList.add('error');
        valid = false;
      }

      const password = document.getElementById('password').value;
      if (password.length < 1) {
        document.getElementById('passwordError').innerHTML = "Le mot de passe est requis.";
        document.getElementById('passwordError').style.display = 'block';
        document.getElementById('password').classList.add('error');
        valid = false;
      }
  if (valid) this.submit();
    });
//signup form validation
document.getElementById('signupForm')?.addEventListener('submit', function(e) {
      e.preventDefault();
      let valid = true;

     
      const username = document.getElementById('username').value.trim();
      if (username.length < 3 || username.length > 20) {
        document.getElementById('usernameError').textContent = '3 à 20 caractères requis.';
        valid = false;
      }

      const email = document.getElementById('email').value.trim();
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerHTML = "Adresse e-mail invalide.";
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('email').classList.add('error');
        valid = false;
      }

      const password = document.getElementById('password').value;
      if (password.length < 6) {
       
        document.getElementById('passwordError').innerHTML = "Au moins 6 caractères requis.";
        document.getElementById('passwordError').style.display = 'block';
        document.getElementById('password').classList.add('error');//on ajout la classe error pour lid 
        valid = false;
      }

      if (valid) this.submit();
    });
    
