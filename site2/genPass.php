<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Личный сайт Marcus Sten</title>
<link rel="stylesheet" href="style.css">
<script type="text/javascript">

    function genPass(){
    let password = "",
    n = +document.getElementById("userAnswer").value;
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (let i = 0; i < n; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
        }
    write(password);
    }

    function write(text){
    document.getElementById("info").innerHTML = text;
    }
</script>
</head>
<body>

<div class="content">
    <?php
        include "menu.php";
    ?>

<div class="header">
</div>

<div class="contentWrap">
<div class="content">
<div class="center">

        <h1>Генератор паролей</h1>

        <div class="box">

            <p id="info">Укажите длинну желаемого пароля в символах</p>
            <input type="text" id="userAnswer">
            <br>
            <a href="#" onClick="genPass();" id="button">Создать пароль</a>

        </div>
</div>

<div class="footer">
    Copyright &copy; <?php echo date("Y");?> Marcus Sten
</div>

</body>
</html>