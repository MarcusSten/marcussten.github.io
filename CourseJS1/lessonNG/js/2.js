function myScript2(){

    
    var goods = [
        {
            title: "Jacket",
            price: 250,
            count: 2
        },
            {
            title: "Polo",
            price: 50,
            count: 3
        },
        {
            title: "Short",
            price: 100,
            count: 4
        },
        {
            title: "Sweater",
            price: 400,
            count: 1
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