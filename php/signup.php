<?php
session_start();
include 'db.php';

$emailError = "";
$username = "";
$email = "";

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Vérifier si l'email existe déjà
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if($result->num_rows > 0){
        $emailError = "Email déjà utilisé !";
        header("Location:signup.html");
        echo $emailError;
    } else {
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        $stmt = $conn->prepare("INSERT INTO users (username,email,password) VALUES (?,?,?)");
        $stmt->bind_param("sss", $username, $email, $hashed_password);

        if($stmt->execute()){
            $user_id = $conn->insert_id;

            // Créer les niveaux
            $stmt2 = $conn->prepare("INSERT INTO levels (user_id, current_level, max_level) VALUES (?, 1, 1)");
            $stmt2->bind_param("i", $user_id);
            $stmt2->execute();

            // 🔹 Ajouter un score initial de 0 pour le nouvel utilisateur
            $stmt3 = $conn->prepare("INSERT INTO scores (user_id, user_name, score) VALUES (?, ?, 0)");
            $stmt3->bind_param("is", $user_id, $username);
            $stmt3->execute();

            // Stocker les infos dans la session
            $_SESSION['user_id'] = $user_id;
            $_SESSION['username'] = $username;

            // Redirection vers l'accueil
            header("Location:index.php");
        } else {
            echo "Erreur: " . $stmt->error;
            $emailError = "Erreur: " . $stmt->error;
        }
    }
}
?>
