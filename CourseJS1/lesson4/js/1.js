function myScript1(){

    var num = prompt("Введите число от 0 до 999");

    var numbers = {};

    function score() {
        if(num < 1000){
            num.toString();
            numbers.hundred = num.charAt(0);
            numbers.tens = num.charAt(1);
            numbers.figure = num.charAt(2);
            console.log("В заданном числе содержится: " + numbers.figure + " единиц, " + numbers.tens + " десятков, " + numbers.hundred + " сотен.");  
        } else{
            console.log("Вы ввели значение больше заданного или не число " + numbers);
        }
    }

    score();

}