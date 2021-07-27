function myScript3(){

    
var goods = [
    {
        title: "Товар 1",
        price: 100,
        count: 1
    },
        {
        title: "Товар 2",
        price: 150,
        count: 2
    },
    {
        title: "Товар 3",
        price: 300,
        count: 2
    }
]; 

var goods_price = 0;

function countBasketPrice() {
    for (i = 0; i < goods.length; i++) { 
        goods_price = goods_price + (goods[i].price * goods[i].count);
    }
    return goods_price;
}
console.log("В корзине:");
for (i = 0; i < goods.length; i++){
    console.log(goods[i].title + " стоит: " + goods[i].price + "$. Количество в корзине: " + goods[i].count);
}
console.log("Cумма товаров корзины: " + countBasketPrice(goods) + "$");

}