"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];


// find the average score in array
function getAverage(scores) {

    let average = 0;
    let numScores = scores.length;
    for(let i = 0; i < numScores; i++){
        average += scores[i];

    }
    return average / scores.length;


};
let myAverage = getAverage(myScores);
console.log(myAverage);

let yourAverage = getAverage(yourScores);
console.log(yourAverage);


