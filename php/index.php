<?php
session_start();
include 'db.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: signin.html");
    exit();
}

$user_id = $_SESSION['user_id'];
$username = $_SESSION['username'];

// Récupérer le niveau maximum atteint
$sql = "SELECT * FROM levels WHERE user_id=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();
$levels = $result->fetch_assoc();
$max_level = $levels['current_level'];

// Récupérer top 3 scores
$top_sql = "SELECT u.username, s.score 
            FROM scores s 
            JOIN users u ON s.user_id = u.id 
            ORDER BY s.score DESC 
            LIMIT 3";
$top_result = $conn->query($top_sql);
?>
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Bubble Quest - Choix du niveau</title>
<link rel="stylesheet" href="../style.css">

</head>
<body>
  <button id="music-btn" class="music-btn"></button>
  <div class="container">
    <h1>Bienvenue <?php echo htmlspecialchars($username); ?></h1>
    <h2>Choisis ton niveau</h2>
    
    <div class="levels-top3-container">
      <!-- Grille des niveaux -->
      <div class="levels-grid" id="levels-container" data-max-level="<?php echo (int)$max_level; ?>">
        <?php
        $total_levels = 10;
        for ($i = 1; $i <= $total_levels; $i++){
            $class = ($i <= $max_level) ? 'open' : 'locked';
            echo '<div class="level-card '.$class.'" data-level="'.$i.'">
                    <div class="level-number">'.$i.'</div>
                    <div class="level-label">Level '.$i.'</div>
                  </div>';
        }
        ?>
      </div>

      <!-- Top 3 scores -->
      <!-- Top 3 scores -->
<div class="top-scores">
  <h3>Top 3 Scores</h3>
  <ol>
    <?php
    if ($top_result->num_rows > 0) {
        $rank = 1; // compteur de rang
        while ($row = $top_result->fetch_assoc()) {
            // Choisir une médaille selon le rang
            $medal = '';
            if ($rank == 1) $medal = '🥇';
            else if ($rank == 2) $medal = '🥈';
            else if ($rank == 3) $medal = '🥉';

            echo '<li>' . $medal . ' <span class="username">'.htmlspecialchars($row['username']).'</span> <span class="score">'.$row['score'].'</span></li>';
            $rank++;
        }
    } else {
        echo '<li>Aucun score disponible</li>';
    }
    ?>
  </ol>
</div>

    </div>
  </div>
        <script src="../sound.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const maxLevel = parseInt(document.getElementById('levels-container').dataset.maxLevel);
      
      document.querySelectorAll('.level-card').forEach(card => {
        card.addEventListener('click', () => {
          const level = parseInt(card.dataset.level);
          if (level <= maxLevel) {
            window.location.href = '/bubble_emma/levels/level' + level + '.php';
          } else {
            card.style.animation = 'shake 0.5s';
            setTimeout(() => card.style.animation = '', 500);
          }
        });
      });
    });
  </script>
</body>
</html>
