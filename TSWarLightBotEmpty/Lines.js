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
var CommandEnum = require('./enum/CommandEnum');
var OptionEnum = require('./enum/OptionEnum');
var ShuffleArray = require('./command/helper/ShuffleArray');

/*
* Converts lines to command information and passes it to the right command class and returns the answer.
*/
var Lines = (function () {
    function Lines(commandMethodList) {
        this.commandMethodList = commandMethodList;
    }
    /*
    * Gets the answer from the bot by passing a command to the right command class.
    * @param line {string} - string containing the command information.
    * @returns {IAnswer} - The command answer.
    * Example : getAnswer('pick_starting_regions 2000 1 7 12 13 18 15 24 25 29 37 42 41');
    * returns :
    *         {
    *             succes: true,
    *             value: '1 7 12 13 18 15'
    *         }
    */
    Lines.prototype.getAnswer = function (line) {
        return null;
    };

    /*
    * Gets a ICommandData instance by converting a string containing the information.
    * @param line {string} - string containing the command information.
    * @returns {ICommandData} - The command information.
    * Example : getCommandData('settings opponent_bot player2');
    * returns :
    *           {
    *               line: 'settings opponent_bot player2',
    *               command: CommandEnum.settings,
    *               option: OptionEnum.opponent_bot,
    *               data: ['player2']
    *           }
    */
    Lines.prototype.getCommandData = function (line) {
        var lineParts = new ShuffleArray(line.trim().split(' '));
        var command = this.getEnum(lineParts.shift(), CommandEnum);
        var option = this.getEnum(lineParts.shift(), OptionEnum);

        return {
            line: undefined,
            command: command,
            option: option,
            data: undefined
        };
    };

    Lines.prototype.getEnum = function (value, enumType) {
        if (!value) {
            return undefined;
        }

        return CommandEnum[value];
    };
    return Lines;
})();

module.exports = Lines;
//# sourceMappingURL=Lines.js.map
