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
        showMessage: false,
        message: 'This message is from the Factory!!!',
        orderSmall: function(){
            this.smallPizzaTotal += 49.00;
            this.smallPizzasOrdered++;
            this.totalAmountDue += 49.00;
            this.checkedOut = false;
        },
        orderMedium: function(){
            this.mediumPizzaTotal += 89.00;
            this.mediumPizzasOrdered++;
            this.totalAmountDue += 89.00;
            this.checkedOut = false;
        },
        orderLarge: function(){
            this.largePizzaTotal += 129.00;
            this.largePizzasOrdered++;
            this.totalAmountDue += 129.00;
            this.checkedOut = false;
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
        checkout: function(){
            this.checkedOut = true;
            this.showMessage = false;
        },
        handlePayment: function(){
            var enteredAmount = document.querySelector('#payment-input').value;
            if(this.totalAmountDue <= enteredAmount){
                this.message = 'Enjoy your Pizzas!!';
                this.clearCart();
            } else { this.message = 'Sorry - that was not enough to complete the transaction.'}
            
            setTimeout(()=>{
                this.showMessage = true;
            }, 0);
            
            setTimeout(()=>{
                this.showMessage = false;
            }, 3000);
                     
        },
        clearCart: function(){
            this.smallPizzaTotal = 0;
            this.mediumPizzaTotal = 0;
            this.largePizzaTotal = 0;
            this.smallPizzasOrdered = 0;
            this.mediumPizzasOrdered = 0;
            this.largePizzasOrdered = 0;
            this.totalAmountDue = 0;
            this.checkedOut = false;
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