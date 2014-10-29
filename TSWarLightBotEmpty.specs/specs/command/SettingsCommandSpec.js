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
/// <reference path="../../Scripts/typings/jasmine/legacy/jasmine-1.3.d.ts" />
'use strict';
var SettingsCommand = require('../../../TSWarLightBotEmpty/command/SettingsCommand');
describe('settingsCommand', function () {
    var settingsCommand;
    var settings;
    beforeEach(function () {
        settings = {};
        settingsCommand = new SettingsCommand(settings);
    });
    // error string should be filled too.
    it('Should return Answer.succes = false in Answer.value if ICommandData.option not matches an option in settingsCommand.', function () {
        // arange
        // act
        // assert
    });
    it('should save the player name to the your_bot setting when the your_bot command is called', function () {
        // arrange
        // act
        // assert
    });
    it('should save the opponents name to the settings when the opponent_name command is called', function () {
        // arrange
        // act
        // assert
    });
    it('should save the starting armies to the settings when the starting_armies command is called', function () {
        // arrange
        // act
        // assert
    });
});
//# sourceMappingURL=SettingsCommandSpec.js.map