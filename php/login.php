<?php
session_start();
include 'db.php'; // fichier de connexion à la DB

// Récupérer les données du formulaire
$email = $_POST['email'];
$password = $_POST['password'];

// Vérifier si l'utilisateur existe
$stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if($user = $result->fetch_assoc()){
    // Vérifier le mot de passe
    if(password_verify($password, $user['password'])){
        // Login réussi → créer session
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];

        // Rediriger vers la page du jeu
        header("Location: index.php");
        exit();
    } else {
        header("Location: login.html");
       
    }
} else {
    echo "Utilisateur non trouvé.";
}
?>
