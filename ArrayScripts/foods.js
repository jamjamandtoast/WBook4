"use strict";

    function calculateSubtotal(order) {
        let subTotal = 0;
        let numOrder = order.length;
        for (let i = 0; i < numOrder; i++){
            subTotal += order[i].price;
        }
        return subTotal;
    }

    let myLunch = [
        {item: "Steak Fajitas", price: 9.95},
        {item: "Chips and Guacamole", price: 5.25},
        {item: "Sweet Tea", price: 2.79}
      ];


      let mySubtotal = calculateSubtotal(myLunch);

      console.log(`Subtotal: ${mySubtotal}`);

      let tax = mySubtotal * 0.08;

      console.log(`Tax:     ${tax}`);

      let tip = (mySubtotal + tax) * 0.18;
      console.log(`Tip Amount: ${tip}`);

      let totaDue = mySubtotal + tax + tip;
      
    console.log(`Total Amount: ${totaDue.toFixed(2)}`);