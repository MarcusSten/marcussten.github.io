function priceSumm(){
    var arr = [];
    var sum = 0;

    var quanity = prompt("Введите желаемое количество товаров в корзине (цена каждого товара от 10 до 100$)");
    for(var i = 0; i < quanity; i++){
        var a = parseInt(Math.random() * (100 - 10) + 10);
        arr.push(a);
    }
    console.log(arr);
    for(var i = 0; i < arr.length; i++){
        console.log("Товар " + (i + 1) + " " + "стоит: " + arr[i] + "$");
        sum = sum + parseInt(arr[i]);
      }
      console.log("сумма товаров корзины: " + sum + "$");

}



