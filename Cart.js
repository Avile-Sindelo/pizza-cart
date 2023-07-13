function Cart(){
    return {
        totalAmountDue: 0,
        smallPizzasOrdered: 0,
        mediumPizzasOrdered: 0,
        largePizzasOrdered: 0,
        smallPizzaTotal: 0,
        mediumPizzaTotal: 0,
        largePizzaTotal: 0,
        checkedOut: false,
        orderSmall: function(){
            this.smallPizzaTotal += 49.00;
            this.smallPizzasOrdered++;
            this.totalAmountDue += 49.00;
        },
        orderMedium: function(){
            this.mediumPizzaTotal += 89.00;
            this.mediumPizzasOrdered++;
            this.totalAmountDue += 89.00;
        },
        orderLarge: function(){
            this.largePizzaTotal += 129.00;
            this.largePizzasOrdered++;
            this.totalAmountDue += 129.00;
        },
        decrementSmall: function(){
            this.smallPizzaTotal -= 49.00;
            this.smallPizzasOrdered--;
            this.totalAmountDue -= 49.00;
            this.checkedOut = false;
        },
        decrementMedium: function(){
            this.mediumPizzaTotal -= 89.00;
            this.mediumPizzasOrdered--;
            this.totalAmountDue -= 89.00;
            this.checkedOut = false;
        },
        decrementLarge: function(){
            this.largePizzaTotal -= 129.00;
            this.largePizzasOrdered--;
            this.totalAmountDue -= 129.00;
            this.checkedOut = false;
        },
        pay: function(){
            this.checkedOut = true;
        }        
    }
}

//These go to the testing facility on Mocha and Chai
let sampleCart = Cart();
console.log('Total for small pizzas : ', sampleCart.smallPizzaTotal);
console.log('Total Amount Due BEFORE any order was made : ', sampleCart.totalAmountDue);
sampleCart.orderSmall();
console.log('Total for small pizzas', sampleCart.smallPizzaTotal);
sampleCart.orderLarge();
sampleCart.orderLarge();
sampleCart.orderLarge();
console.log('Total for large pizzas', sampleCart.largePizzaTotal);





console.log('Total Amount Due AFTER all orders were made : ', sampleCart.totalAmountDue);