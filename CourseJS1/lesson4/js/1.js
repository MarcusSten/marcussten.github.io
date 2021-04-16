function myScript1(){

    var num = prompt("Введите число от 0 до 999");
    var numbers = {};
    var numLength = 3;

    num.toString();
    num = num.padStart(numLength, '0');

    function score() {
        if(num < 1000){
            numbers.hundred = num.charAt(0);
            numbers.tens = num.charAt(1);
            numbers.figure = num.charAt(2);
            console.log("В заданном числе содержится: " + numbers.figure + " единиц, " + numbers.tens + " десятков, " + numbers.hundred + " сотен.");  
        } else if(num >= 1000){
            console.log("Вы ввели значение больше заданного. Свойств в объекте: " + Object.keys(numbers).length);
        } else {
            console.log("Вы ввели не число ");
        }
    }

    score();
} 
    

