<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Личный сайт Marcus Sten</title>
	<link rel="stylesheet" href="style.css"> 	
</head>
<body>

<div class="content">
	<?php
		include "menu.php";
	?>

<div class="contentWrap">
    <div class="content">
        <div class="center">

			<h1>Игра в загадки</h1>

			<div class="box">

				<?php

					if(isset($_GET['userAnswer1']) && isset($_GET['userAnswer2']) && isset($_GET['userAnswer3'])){

						$userAnswer = $_GET["userAnswer1"];
						$score = 0;
						if($userAnswer == "пять" || $userAnswer == "5" || $userAnswer == "Пять"){
							$score++;
						}

						$userAnswer = $_GET["userAnswer2"];
						if($userAnswer == "Лима" || $userAnswer == "лима" || $userAnswer == "lima" || $userAnswer == "Lima"){
							$score++;
						}

						$userAnswer = $_GET["userAnswer3"];
						if($userAnswer == "ягода" || $userAnswer == "Ягода"){
							$score++;
						}

						echo "Вы угадали " . $score . " загадок";

					}
				?>

				<form method="GET">
					<p>Сколько пальцев на твоей правой руке?</p>
					<input type="text" name="userAnswer1">

					<p>Назови столицу Перу.</p>
					<input type="text" name="userAnswer2">

					<p>Арбуз это ягода или фрукт?</p>
					<input type="text" name="userAnswer3">

					<br>
					<br>
					<br>
					<input type="submit" value="Ответить" name="">
				</form>

			</div>

        </div>
    </div>
</div>

	

</div>
<div class="footer">
	Copyright &copy; <?php echo date("Y");?> Marcus Sten


</body>
</html>