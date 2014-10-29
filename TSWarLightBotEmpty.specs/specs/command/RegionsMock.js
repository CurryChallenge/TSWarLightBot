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
var PossibleOwnersEnum = require('../../../TSWarLightBotEmpty/map/enum/PossibleOwnersEnum');
var RegionsMock = (function () {
    function RegionsMock() {
    }
    RegionsMock.getMock = function () {
        var result = [{
            id: 1,
            superRegion: null,
            owner: 2 /* PLAYER */,
            neighbors: [],
            troopCount: 1,
            isOnEmpireBorder: false,
            isOnSuperRegionBorder: false
        }, {
            id: 2,
            superRegion: null,
            owner: 2 /* PLAYER */,
            neighbors: [],
            troopCount: 1,
            isOnEmpireBorder: false,
            isOnSuperRegionBorder: false
        }, {
            id: 3,
            superRegion: null,
            owner: 1 /* OPPONENT */,
            neighbors: [],
            troopCount: 1,
            isOnEmpireBorder: false,
            isOnSuperRegionBorder: false
        }, {
            id: 4,
            superRegion: null,
            owner: 0 /* NEUTRAL */,
            neighbors: [],
            troopCount: 1,
            isOnEmpireBorder: false,
            isOnSuperRegionBorder: false
        }];
        result[0].neighbors.push(result[1]);
        result[0].neighbors.push(result[2]);
        result[0].neighbors.push(result[3]);
        // We don't need this => Connectivity is only given in one way: 'region id' < 'neighbour id'.
        // result[1].neighbors.push(result[0]);
        return result;
    };
    return RegionsMock;
})();
module.exports = RegionsMock;
//# sourceMappingURL=RegionsMock.js.map