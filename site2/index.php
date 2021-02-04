<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Личный сайт студента GeekBrains</title>
	<link rel="stylesheet" href="style.css"> 
</head>
<body>

<div class="content">
	<?php
		include "menu.php";
	?>

	<h1>Личный сайт Marcus Sten</h1>

	<div class="center">
	<img src="img/photo.png">
		<div class="box_text">
			<p><b>Д</b>обрый день. Меня зовут <i>Олег</i>. Мне 35 лет и я только начал осваивать программирование. Цель моего обучения - стать "Независимым". У меня есть любимая жена и сын. Именно через программирование я вижу будущее и перспективы для своей семьи. Уверен, что мы с вами похожи.</p>

			<p>На этом сайте вы сможете сыграть в несколько игр, которые я написал: <br>
			<a href="puzzle.php">Загадки</a>
			<a href="guess.php">Угадайка</a>
			<a href="genPass.php">Пароли</a>
			</p>
		</div>
	</div>
</div>
<div class="footer">
	Copyright &copy; <?php echo date("Y");?> Marcus Sten
</div>


</body>
</html>