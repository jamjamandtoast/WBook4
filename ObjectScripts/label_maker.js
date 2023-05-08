"use strict";
let myInfo = {
    name:"Alex",
    address: "5678 Coconut Ln",
    city: "West Palm Beach, Florida",
    state: "Florida",
    zip: "33401",

};
function printContact(myInfo){
    console.log(myInfo.name + ", " + myInfo.address + ", " + myInfo.city + ", " + myInfo.state + " " + myInfo.zip);
}
printContact(myInfo)