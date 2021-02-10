"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var CharactersCollection_1 = require("./CharactersCollection");
// const numbersCollection = new NumbersCollection([10, 3,-5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.bubbleSort();
// console.log(numbersCollection.data);
var charactersCollection = new CharactersCollection_1.CharactersCollection('GHIbcaEf');
var sorter = new Sorter_1.Sorter(charactersCollection);
sorter.bubbleSort();
console.log(charactersCollection.data);
