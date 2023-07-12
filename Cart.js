function Cart(){
    return {
        totalAmountDue: 0,
        smallPizzasOrdered: 0,
        mediumPizzasOrdered: 0,
        largePizzasOrdered: 0,
        smallPizzaTotal: 0,
        mediumPizzaTotal: 0,
        largePizzaTotal: 0,
        orderSmall: function(){
            this.smallPizzaTotal += 49.00;
            this.smallPizzasOrdered++;
            this.totalAmountDue += 49.00;
            console.log(this.smallPizzaTotal);
            console.log(this.totalAmountDue);
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
        }
        
    }
}


console.log(Cart());