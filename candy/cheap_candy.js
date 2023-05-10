"use strict";

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO:  fill the array with 10 candies of various
    //        price ranges
 ];

 // which candies cost less than $4.00?

 function getCandyProduct(products, productName) {
    let nameofproduct = [];
    let numProducts = products.length;
    for(let i = 0; i < numProducts; i++) {
        if(products[i].product == productName) {
            nameofproduct.push(products[i]);
        }
    }
    return nameofproduct;
}

let candies = [];
for(let i = 0; i < products.length; i++) {
    if(products[i].price < 4.00) {
        candies.push(products[i]);
    }
}

function displayCandiesLessThan(products) {
   let numCandies = products.length;
   let candyNames = "";
   for(let i = 0; i < numCandies; i++){
    candyNames += products[i].product + ", ";
   }
   return candyNames.substring(0, candyNames.length - 2)
}

let candyPrice = `The list of candies that are less than $4.00 are: ${displayCandiesLessThan(candies)}`;
console.log(candyPrice);