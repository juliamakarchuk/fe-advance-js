

const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    pork: 80,
    cheese: 60,
    tea: 20,
    candy: 25
};
const order = {
    bread: 4,
    milk: 2,
    apples: 1,
    cheese: 1
};


const Cashier = function(name, products){
    this.name = name;
    this.products = products;
    this.customerMoney = 0;
    this.changeAmount = 0;
    this.countTotalPrice = function(order){
        let sum = 0;
         const entriesProduct = Object.entries(products);
         const entriesOrder = Object.entries(order);
        for(const value of entriesProduct) {
            for(const valueTwo of entriesOrder) {
                if(value[0] === valueTwo[0]){
                    sum += value[1] * valueTwo[1];
                }

            }
        }
        return sum;
    };
    this.totalPrice = this.countTotalPrice(order);
     this.getCustomerMoney = function(){
       while(this.customerMoney < this.totalPrice && this.customerMoney !== this.totalPrice) {
           if(this.customerMoney !== null){
               this.customerMoney = prompt(`Вы скупились на ${this.totalPrice}. Введите свои деньги`, `${this.totalPrice}`);
           }
           else if (this.customerMoney === null){
               return null;
           }
       }
       return this.customerMoney;
    }
    this.countChange = function(){
         if(this.customerMoney){
             this.changeAmount = this.customerMoney - this.totalPrice;
             return `Спасибо за покупку, ваша сдача ${this.changeAmount}`;
         }
       return 'Очень жаль, что-то пошло не так, приходите еще';
    }
    this.reset = function(){
         this.totalPrice = 0;
         this.customerMoney = 0;
         this.changeAmount = 0;
    }
    this.serve = function(order){
        this.countTotalPrice(order);
        this.getCustomerMoney();
        console.log(this.countChange());
        this.reset();
    }
}
const cashier = new Cashier('Mango', products);
cashier.serve(order);

