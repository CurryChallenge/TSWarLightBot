/*
 * Warlight AI Game Bot
 *
 * Oktober 2014
 *
 * Based on Niko van Meurs javascript bot from http://theaigames.com/competitions/warlight-ai-challenge/getting-started
 *
 * @authors Marcel van de Kamp and Taeke van der Veen
 * @License MIT License (http://opensource.org/Licenses/MIT)
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// Based on http://stackoverflow.com/questions/14000645/how-to-extend-native-javascipt-array-in-typescript
// and on http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
var DummyArray = require('./DummyArray');
// Add a shuffle method to the array class and a array initializer.
var ShuffleArray = (function (_super) {
    __extends(ShuffleArray, _super);
    function ShuffleArray(values) {
        var _this = this;
        _super.call(this);
        if (values !== undefined) {
            values.forEach(function (value) {
                _this.push(value);
            });
        }
    }
    ShuffleArray.prototype.shuffle = function () {
        var currentIndex = this.length;
        var temporaryValue;
        var randomIndex;
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = this[currentIndex];
            this[currentIndex] = this[randomIndex];
            this[randomIndex] = temporaryValue;
        }
        return this;
    };
    return ShuffleArray;
})(DummyArray);
module.exports = ShuffleArray;
//# sourceMappingURL=ShuffleArray.js.map