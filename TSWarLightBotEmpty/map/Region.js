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
var PossibleOwnersEnum = require('./enum/PossibleOwnersEnum');
var Region = (function () {
    /**
     * Create an instance of the Region class. Sets properties to a default value.
     * @constructor
     * @param id {number} - The unique id for this Region.
     * @param superRegion {ISuperRegion} - Every Region instance is part of a superRegion.
     */
    function Region(id, superRegion) {
        this.id = id;
        this.superRegion = superRegion;
        this.owner = 0 /* NEUTRAL */;
        this.neighbors = [];
        this.troopCount = 2;
        this.isOnEmpireBorder = false;
        this.isOnSuperRegionBorder = false;
    }
    return Region;
})();
module.exports = Region;
//# sourceMappingURL=Region.js.map