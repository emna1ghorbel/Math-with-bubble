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
    equations: [25,49 ,17],
    bubbleValues: ["1","2","3","4","5","6","7","8","9","+","-","*","(",")"],
    bubbleCount: 35,
    timeLimit: 60,
    levelNumber: 2
});

</script>
</body>
</html>