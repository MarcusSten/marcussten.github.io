function checking(){
        let burger = new Hamburger('size', 'fillings', 'topings');
        burger.showSum('#price', '#calories');
}


class Param {
    constructor(element) {
        this.name = element.value;
        this.price = +element.dataset['price'];
        this.calories = +element.dataset['calories'];
    }
}

class Hamburger {
    constructor(size, fillings, topping){
        this.size = new Param(this._select(size));
        this.fillings = new Param(this._select(fillings));
        this.toppings = this._getToppings(topping);
    }

    _select(name) {
        return document.querySelector(`input[name="${name}"]:checked`);
    }

    _getToppings(name) {
        let result = [];
        this._selectAll(name).forEach(el => result.push(new Param(el)));
        return result;
    }

    _selectAll(name) {
        return document.querySelectorAll(`input[name="${name}"]:checked`);
    }

    _calculatePrice() {
        let result = this.size.price + this.fillings.price;
        this.toppings.forEach(topping => result += topping.price);
        return result;
    }

    _calculateCalories() {
        let result = this.size.calories + this.fillings.calories;
        this.toppings.forEach(topping => result += topping.calories);
        return result;
    }

    showSum(price, calories){
        document.querySelector(price).textContent = this._calculatePrice();
        document.querySelector(calories).textContent = this._calculateCalories();
    }
}
