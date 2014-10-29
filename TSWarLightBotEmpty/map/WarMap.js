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
var WarMap = (function () {
    /**
     * Create an instance of the WarMap class. Holds all the Region instances and SuperRegion instances.
     * @constructor
     */
    function WarMap() {
        this.regions = {};
        this.superRegions = {};
    }
    /**
     * Returns the Region instance with the provided id.
     * @param id {number} - The id.
     * @returns {IRegion} - The Region instance.
     */
    WarMap.prototype.getRegionById = function (id) {
        if (typeof (this.regions[id]) !== 'undefined') {
            return this.regions[id];
        }
        return null;
    };
    /**
     * Returns the SuperRegion instance with the provided id.
     * @param id {number} - The id.
     * @returns {ISuperRegion} - The SuperRegion instance.
     */
    WarMap.prototype.getSuperRegionById = function (id) {
        if (typeof (this.superRegions[id]) !== 'undefined') {
            return this.superRegions[id];
        }
        return null;
    };
    /**
     * Add a Region to the internal list of Region instances.
     * @param region {IRegion} - The Region instance.
     */
    WarMap.prototype.addRegion = function (region) {
        if (typeof (region) !== 'undefined') {
            this.regions[region.id] = region;
        }
    };
    /**
     * Add a Region to the internal list of SuperRegion instances.
     * @param region {ISuperRegion} - The SuperRegion instance.
     */
    WarMap.prototype.addSuperRegion = function (region) {
        if (typeof (region) !== 'undefined') {
            this.superRegions[region.id] = region;
        }
    };
    /**
     * Returns a list with all the IRegion instances which are owned by the provided owner type.
     * @param owner {PossibleOwnersEnum} - The owner type.
     * @returns {IRegion[]} - The list of IRegion instances the provided owner type owns.
     */
    WarMap.prototype.getOwnedRegions = function (owner) {
        var ownedRegions = [];
        for (var i in this.regions) {
            var region = this.regions[i]; // indexer
            if (region.owner === owner) {
                ownedRegions.push(region);
            }
        }
        return ownedRegions;
    };
    return WarMap;
})();
module.exports = WarMap;
//# sourceMappingURL=WarMap.js.map