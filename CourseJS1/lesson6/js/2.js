var goods = [
    {
        title: "Polo",
        price: 250,
        count: 1
    },
        {
        title: "Jacket",
        price: 200,
        count: 1
    },
    {
        title: "Sweater",
        price: 400,
        count: 1
    }
]; 

var titleCard = document.getElementsByClassName("card_title");
for (i = 0; i < goods.length; i++){
    titleCard[i].innerHTML = goods[i].title;
}
var priceCard = document.getElementsByClassName("card_price");
for (i = 0; i < goods.length; i++){
    priceCard[i].innerHTML = goods[i].price + " $";
}

var goods_price = 0;
var goods_count = 0;

function addCard1(){
    var ol = document.querySelector("ol");
    var summa = document.getElementById("summa");
    var quantity = document.getElementById("quantity");
    var item = document.createElement("li");
    item.innerHTML = "Товар: " + goods[0].title + " = " + goods[0].price + "$";
    ol.append(item);
    ol.insertBefore(item,ol.children[3]);
    goods_price = goods_price + goods[0].price;
    summa.innerHTML = goods_price;
    goods_count++;
    quantity.innerHTML = goods_count;
}
function addCard2(){
    var ol = document.querySelector("ol");
    var summa = document.getElementById("summa");
    var quantity = document.getElementById("quantity");
    var item = document.createElement("li");
    item.innerHTML = "Товар: " + goods[1].title + " = " + goods[1].price + "$";
    ol.append(item);
    ol.insertBefore(item,ol.children[3]);
    goods_price = goods_price + goods[1].price;
    summa.innerHTML = goods_price;
    goods_count++;
    quantity.innerHTML = goods_count;
}
function addCard3(){
    var ol = document.querySelector("ol");
    var summa = document.getElementById("summa");
    var quantity = document.getElementById("quantity");
    var item = document.createElement("li");
    item.innerHTML = "Товар: " + goods[2].title + " = " + goods[2].price + "$";
    ol.append(item);
    ol.insertBefore(item,ol.children[3]);
    goods_price = goods_price + goods[2].price;
    summa.innerHTML = goods_price;
    goods_count++;
    quantity.innerHTML = goods_count;
}