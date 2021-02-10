"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (idx1, idx2) {
        return (this.data[idx1].toLowerCase() > this.data[idx2].toLowerCase());
    };
    CharactersCollection.prototype.swap = function (idx1, idx2) {
        var characters = this.data.split('');
        var left = characters[idx1];
        characters[idx1] = characters[idx2];
        characters[idx2] = left;
        this.data = characters.join('');
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
