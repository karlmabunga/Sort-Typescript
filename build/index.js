"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.bubbleSort = function () {
        var _a;
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    _a = [[this.collection[j + 1]], [this.collection[j]]], this.collection[j] = _a[0][0], this.collection[j + 1] = _a[1][0];
                }
            }
        }
    };
    return Sorter;
}());
// Above is the same as below
// class Sorter {
//   constructor(public collection: number[]) {}
// }
var sorter = new Sorter([10, 3, -5, 0]);
sorter.bubbleSort();
console.log(sorter.collection);