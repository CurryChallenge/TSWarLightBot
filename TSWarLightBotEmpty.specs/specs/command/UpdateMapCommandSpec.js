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
describe('updateMapCommand', function () {
    var UpdateMapCommand = require('../../../TSWarLightBotEmpty/command/UpdateMapCommand');
    var updateMapCommand;
    // Mocks and spies.
    var commandDataMock;
    var settingsMock;
    var warMapSpy;
    var yourBotNameMock;
    var opponentBotName;
    var regionsMock;
    beforeEach(function () {
    });
    describe('getAnswer', function () {
        // Every three items in data stand for one region to update. 
        // First item is id of the region.
        // Second item is the name of the player.
        // Third item is the troopcount on the region.
        // It should call addRegion for the amount of item in data devided by three.
        // It should call it with the id of the Region.
        it('Should call getRegionById on warMap.', function () {
            // arange
            // act
            // assert
        });
        it('Should update the regions', function () {
            // arange
            // act
            // assert
        });
        it('Should return IAnwser.succes is true and a empty value', function () {
            // arrange
            // act
            // assert
        });
    });
});
//# sourceMappingURL=UpdateMapCommandSpec.js.map