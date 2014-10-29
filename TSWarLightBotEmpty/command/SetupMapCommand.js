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
var OptionEnum = require('../enum/OptionEnum');
/*
 * Handles setup_map command from the game engine. The regions are given, The superregions are given and the connectivity
 * of the regions are given in different calls
 */
var SetupMapCommand = (function () {
    /*
     * Create an instance of the Setup_map class.
     * @constructor
     */
    function SetupMapCommand(warMap) {
        var _this = this;
        this.warMap = warMap;
        this.optionMethodList = {};
        this.optionMethodList[0 /* super_regions */] = function (commandData) {
            return _this.super_regions(commandData);
        };
        this.optionMethodList[1 /* regions */] = function (commandData) {
            return _this.regions(commandData);
        };
        this.optionMethodList[2 /* neighbors */] = function (commandData) {
            return _this.neighbors(commandData);
        };
    }
    /*
     * Gets the answer from the bot for the setup_map command.
     * @param data {ICommandData} - Information about the command.
     * @returns {ICommandData} - The command answer.
     * Example:
     * getAnswer({
     *     line: 'setup_map super_regions 1 2 2 5',
     *     command: CommandEnum.setup_map,
     *     option: OptionEnum.super_regions,
     *     data: ['1', '2', '2', '5']
     * });
     * returns:
     *      {
     *         succes: true,
     *         value: '1 7 24 25 41 42'
     *      }
     */
    SetupMapCommand.prototype.getAnswer = function (commandData) {
        return null;
    };
    SetupMapCommand.prototype.super_regions = function (commandData) {
        return null;
    };
    SetupMapCommand.prototype.regions = function (commandData) {
        return null;
    };
    SetupMapCommand.prototype.neighbors = function (commandData) {
        return null;
    };
    return SetupMapCommand;
})();
module.exports = SetupMapCommand;
//# sourceMappingURL=SetupMapCommand.js.map