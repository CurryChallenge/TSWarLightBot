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
'use strict';
/*
 * Holds message's prevents retyping it everywhere.
 */
var Consts = (function () {
    function Consts() {
    }
    Object.defineProperty(Consts, "UNABLE_TO_EXECUTE", {
        get: function () {
            return 'Unable to execute command: %s\n';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Consts, "NOT_ENOUGHT_REGIONS", {
        get: function () {
            return 'There are not enough regions in the command %s to pick from.\n';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Consts, "PLACE_ARMIES", {
        get: function () {
            return 'place_armies';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Consts, "ATTACK_TRANSFER", {
        get: function () {
            return 'attack/transfer';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Consts, "NO_MOVES", {
        get: function () {
            return 'No moves';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Consts, "MINIMUM_TROOPS_FOR_ATTACK", {
        get: function () {
            return 7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Consts, "MINIMUM_TROOPS_FOR_TRANSFER", {
        get: function () {
            return 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Consts, "NUMBER_OF_REGIONS_TO_PICK", {
        get: function () {
            return 6;
        },
        enumerable: true,
        configurable: true
    });
    return Consts;
})();
module.exports = Consts;
//# sourceMappingURL=Consts.js.map