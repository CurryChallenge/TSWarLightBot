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
 * Some commands from the game engie are split up in two parts. These are those second parts.
 */
var OptionEnum;
(function (OptionEnum) {
    /*
     * The superregions are given. Will be preceded with setup_map.
     */
    OptionEnum[OptionEnum["super_regions"] = 0] = "super_regions";
    /*
     * The regions are given. Will be preceded with setup_map.
     */
    OptionEnum[OptionEnum["regions"] = 1] = "regions";
    /*
     * The connectivity of the regions are given. Will be preceded with setup_map.
     */
    OptionEnum[OptionEnum["neighbors"] = 2] = "neighbors";
    /*
     * The name of your bot is given. Will be preceded with settings.
     */
    OptionEnum[OptionEnum["your_bot"] = 3] = "your_bot";
    /*
     * The name of your opponent bot is given. Will be preceded with settings.
     */
    OptionEnum[OptionEnum["opponent_bot"] = 4] = "opponent_bot";
    /*
     * the amount of armies your bot can place on  the map at the start of this round. Will be preceded with settings.
     */
    OptionEnum[OptionEnum["starting_armies"] = 5] = "starting_armies";
    /**
     * Request for the bot to return his place armies moves. Will be preceded with go.
     */
    OptionEnum[OptionEnum["place_armies"] = 6] = "place_armies";
    /*
     * Request for the bot to return his attack and/or transfer moves. Will be preceded with go.
     */
    OptionEnum[OptionEnum["attacktransfer"] = 7] = "attacktransfer";
})(OptionEnum || (OptionEnum = {}));
module.exports = OptionEnum;
//# sourceMappingURL=OptionEnum.js.map