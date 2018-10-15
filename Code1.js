"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let rating, total, avgStars, counter;

function main() {
    setContinueResponse();
    while (continueResponse === 1){
        setRating();
        setCounter();
        setTotal();
        setAvgStars();
        setContinueResponse();
    }
    printAvgStars();
    printEndTerminal();
}

main();

function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        while (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

    function setRating() {
        const MAX_RANGE = 5;
        rating = Number(PROMPT.question('\nWhat would you like to rate this film from 1-5? '));
        if (rating < 1 || rating > MAX_RANGE) {
            console.log(`I'm Sorry, that value is incorrect. Please try again.`);
            return setRating
        }
    }

    function setCounter() {
        if (counter != null) {
            counter++;
        } else {
            counter = 1;
        }
    }

function setTotal() {
    console.log(`total = ${total}, rating = ${rating}`);
    if (!total) {
        total = 0;
    }
    total = (total + rating);
}

function setAvgStars() {
    avgStars = (total / counter);
}

function printAvgStars() {
    console.log(`The average star rating of this film is ${avgStars}, out of ${counter} reviews`);
}

function printEndTerminal() {
    console.log(`Good Bye`)
}
