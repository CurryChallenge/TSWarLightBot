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
describe('opponentMovesCommand', function () {
    var OpponentMovesCommand = require('../../../TSWarLightBotEmpty/command/OpponentMovesCommand');
    var opponentMovesCommand;
    // Mocks and spies.
    var commandDataMock;
    beforeEach(function () {
        // Creeer de unit under test en injecteer de mock en spy.
        opponentMovesCommand = new OpponentMovesCommand();
    });
    describe('getAnswer', function () {
        it('Should return IAnwser.succes is true and a empty value', function () {
            // arrange
            // act
            // assert
        });
    });
});
//# sourceMappingURL=OpponentMovesCommandSpec.js.map