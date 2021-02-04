<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Личный сайт Marcus Sten</title>
<link rel="stylesheet" href="style.css">
<script type="text/javascript">

    let answer = parseInt(Math.random() * 100);
    let playerNumber = 1;

    function readInt(){
        let number = document.getElementById("userAnswer").value;
        return parseInt(number);
        // return +document.getElementById("userAnswer").value;
    }

    function write(text){
        document.getElementById("info").innerHTML = text;
    }

    function hide(id){
        document.getElementById(id).style.display = "none";
    }

    function guess(){
            let userAnswer = readInt();

            userAnswer = parseInt(userAnswer);

            if(userAnswer == answer){
                write('Поздравляю! Победил игрок №' + playerNumber);
                hide("button");
                hide("userAnswer");

            } else if(userAnswer > answer){
                write('Игрок №' + playerNumber + ', вы ввели слишком большое число. Переход хода');
            } else if(userAnswer < answer){
                write('Игрок №' + playerNumber + ', вы ввели слишком маленькое число. Переход хода');              
            }

        if(playerNumber == 1){
            playerNumber = 2;
        }
        else{
            playerNumber = 1;
        }
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

            <h1>Игра "Угадай число" для двух игроков</h1>

            <div class="box">

                <p id="info">Угадайте число от 0 до 100. Ходит игрок №1</p>
                <input type="text" id="userAnswer">
                <br>
                <a href="#" onClick="guess();" id="button">Начать</a>             
            </div>
        </div>
        </div>
    </div>
</div>

<div class="footer">
    Copyright &copy; <?php echo date("Y");?> Marcus Sten
</div>

</body>
</html>