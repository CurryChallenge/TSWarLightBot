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
// Based on http://stackoverflow.com/questions/14000645/how-to-extend-native-javascipt-array-in-typescript
// A dummy class to inherite array.
var DummyArray = (function () {
    function DummyArray() {
        Array.apply(this);
        return new Array();
    }
    // We need this, or TS will show an error,
    // DummyArray["prototype"] = new Array(); will replace with native js arrray function
    DummyArray.prototype.pop = function () {
        return '';
    };
    DummyArray.prototype.push = function (val) {
        return 0;
    };
    DummyArray.prototype.shift = function () {
        return null;
    };
    DummyArray.prototype.unshift = function (value) {
        return null;
    };
    DummyArray.prototype.slice = function (begin, end) {
        return null;
    };
    DummyArray.prototype.forEach = function (callBack) {
        return null;
    };
    return DummyArray;
})();
// Adding Arrray to DummyArray prototype chain.
DummyArray.prototype = new Array();
module.exports = DummyArray;
//# sourceMappingURL=DummyArray.js.map