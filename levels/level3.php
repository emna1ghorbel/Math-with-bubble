<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Level 1 - Bubble Quest</title>

<link rel="stylesheet" href="levels.css">
</head>
<body>
<?php include "menu.php"; ?>


<script src="level.js"></script>
<script src="../sound.js"></script>


<script>
    
startLevel({
    equations: generateRandomEquations(10, 5, 30),
    bubbleValues: ["1","2","3","4","5","6","7","8","9","+","-","*","/","(",")"],
    bubbleCount: 50,
    timeLimit: 90,
    levelNumber: 3,
});

</script>
</body>
</html>