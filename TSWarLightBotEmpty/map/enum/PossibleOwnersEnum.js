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
var PossibleOwnersEnum;
(function (PossibleOwnersEnum) {
    PossibleOwnersEnum[PossibleOwnersEnum["NEUTRAL"] = 0] = "NEUTRAL";
    PossibleOwnersEnum[PossibleOwnersEnum["OPPONENT"] = 1] = "OPPONENT";
    PossibleOwnersEnum[PossibleOwnersEnum["PLAYER"] = 2] = "PLAYER";
})(PossibleOwnersEnum || (PossibleOwnersEnum = {}));
module.exports = PossibleOwnersEnum;
//# sourceMappingURL=PossibleOwnersEnum.js.map