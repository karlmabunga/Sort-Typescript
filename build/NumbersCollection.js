"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (idx1, idx2) {
        return this.data[idx1] > this.data[idx2];
    };
    NumbersCollection.prototype.swap = function (idx1, idx2) {
        var _a;
        _a = [[this.data[idx2]], [this.data[idx1]]], this.data[idx1] = _a[0][0], this.data[idx2] = _a[1][0];
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
