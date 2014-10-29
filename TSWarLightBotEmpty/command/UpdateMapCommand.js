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
 * Handles update_map command from the game engine. Visible map for the bot is given like this: region id; player owning region;
 * number of armies.
 */
var UpdateMapCommand = (function () {
    function UpdateMapCommand(settings, warMap) {
        this.settings = settings;
        this.warMap = warMap;
    }
    /*
     * Gets the answer from the bot for the update_map command.
     * @param data {ICommandData} - Information about the command.
     * @returns {ICommandData} - The command answer.
     * Example:
     * getAnswer({
     *     line: 'update_map 1 player1 2 2 player1 4 3 neutral 2 4 player2 5',
     *     command: CommandEnum.update_map,
     *     option: undefined,
     *     data: ['1', 'player1', '2', '2', 'player1', '4', '3', 'neutral', '2', '4', 'player2' '5']
     * });
     * returns:
     *      {
     *          succes: true,
     *          value: '1 7 24 25 41 42'
     *      }
     */
    UpdateMapCommand.prototype.getAnswer = function (commandData) {
        return null;
    };
    return UpdateMapCommand;
})();
module.exports = UpdateMapCommand;
//# sourceMappingURL=UpdateMapCommand.js.map