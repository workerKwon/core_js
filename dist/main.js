"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = greet;
const sum = (a, b) => a + b;
const a = 10;
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date}`);
}
greet("Brendan", 2);
