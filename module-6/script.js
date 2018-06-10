
class Hamburger{
    /**
     *
     * @param {String} size
     * @param {String} stuffing
     */
    constructor(size, stuffing) {
        this._size = size,
        this._stuffing = stuffing
    }

    addToppingParam() {
        return this._toppings = [];
    }

    /**
     *
     * @param topping
     */
    addTopping(topping) {
        let findTopping = this._toppings.find(function (elem) {
           return  elem === topping;
        });

        if(findTopping){
            alert `Error, you have this topping`;
        } else {
            this._toppings.push(topping);
        }
    }
    /**
     *
     * @param {String} topping
     * @returns {Array}
     */
    removeTopping(topping) {
        let findTopping = this._toppings.find(function (elem) {
            return  elem === topping;
        });

        if(findTopping){
            let position = this._toppings.indexOf(topping);
            this._toppings.splice(position,1);
        } else{
            alert `Sorry, but you don't have this topping. You can't remove)`
        }

        return this._toppings;
    }
    /**
     *
     * @returns {Array}
     */
    getToppings() {
        return this._toppings;
    }

    get toppings() {
        return this.getToppings();
    }

    /**
     *
     * @returns {String|*}
     */
    getSize() {
        return this._size;
    }

    get size() {
        return this.getSize();
    }

    /**
     *
     * @returns {String|*}
     */
    getStuffing() {
        return this._stuffing;
    }

    get stuffing() {
        return this.getStuffing();
    }

    /**
     *
     * @returns {*|number}
     */
    calculatePrice() {
        let hamburgerPrice = 0;
        let summ = this._toppings.reduce(function(acc, value){
             return acc+Hamburger.TOPPINGS[value].price;
        }, 0);

        hamburgerPrice = Hamburger.SIZES[this._size].price + Hamburger.STUFFINGS[this._stuffing].price + summ;

        return hamburgerPrice;
    }

    get price() {
        return this.calculatePrice();
    }

    /**
     *
     * @returns {*|number}
     */
    calculateCalories() {
        let hamburgerCalories = 0;
        let  summCalories=this._toppings.reduce(function(acc, value){
            return acc+Hamburger.TOPPINGS[value].calories;
        }, 0);
        hamburgerCalories=Hamburger.SIZES[this._size].calories + Hamburger.STUFFINGS[this._stuffing].calories +
            summCalories;

        return hamburgerCalories;
    }

    get calories() {
        return this.calculateCalories();
    }
}
Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';


Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]:{
        price:30,
        calories:50,
    },
    [Hamburger.SIZE_LARGE]:{
        price:50,
        calories:100,
    }
};

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.STUFFINGS = {
    [Hamburger.STUFFING_CHEESE]: {
        price: 15,
        calories: 20,
    },
    [Hamburger.STUFFING_SALAD]:{
        price:20,
        calories:5,
    },
    [Hamburger.STUFFING_MEAT]:{
        price:35,
        calories:15,
    }
}
Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';
Hamburger.TOPPINGS = {
    [Hamburger.TOPPING_SPICE]: {
        price: 10,
        calories: 0,
    },
    [Hamburger.TOPPING_SAUCE]:{
        price:15,
        calories:5,
    }
};
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addToppingParam();
hamburger.addTopping(Hamburger.TOPPING_SPICE);
console.log("Calories: ", hamburger.calculateCalories());
console.log("Price: ", hamburger.calculatePrice());
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log("Price with sauce: ", hamburger.calculatePrice());
console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE);
console.log(hamburger.removeTopping(Hamburger.TOPPING_SPICE));
console.log("Hamburger has %d toppings", hamburger.getToppings().length);