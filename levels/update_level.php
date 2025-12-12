<?php
session_start();
include "../php/db.php";

if (!isset($_SESSION['user_id'])) {
    header("Location: signin.html");
    exit;
}

$user_id = $_SESSION['user_id'];
$user_name = $_SESSION['username']; // récupère le nom de l'utilisateur
$level = intval($_POST['level']); 
$score = intval($_POST['score']); // score envoyé depuis JS

// Récupérer l'ancien niveau
$sql = "SELECT current_level, max_level FROM levels WHERE user_id=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();
$row = $result->fetch_assoc();

$current_level = $row['current_level'];
$max_level = $row['max_level'];

$new_current = $level;
$new_max = max($max_level, $level);

// Mise à jour du niveau
$update = $conn->prepare("UPDATE levels SET current_level=?, max_level=? WHERE user_id=?");
$update->bind_param("iii", $new_current, $new_max, $user_id);

if ($update->execute()) {
    echo "Level updated successfully!";

    // 🔹 Mise à jour du score dans la table scores
     $updateScore = $conn->prepare("UPDATE scores SET score = score + ? WHERE user_id=?");
    $updateScore->bind_param("ii", $score, $user_id);
    if ($updateScore->execute()) {
        echo "Score updated successfully!";
    } else {
        echo "Error updating score: " . $conn->error;
    }

} else {
    echo "Error updating level: " . $conn->error;
}
?>
