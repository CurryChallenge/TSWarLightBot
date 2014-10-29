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
describe('setupMapCommand', function () {
    // Class for unit under test and variable for instance of unit under test.
    var SetupMapCommand = require('../../../TSWarLightBotEmpty/command/SetupMapCommand');
    var setupMapCommand;
    describe('getAnswer', function () {
        it('Should call regions method on setupMapCommand if ICommandData.option is regions.', function () {
            // arange
            // act
            // assert
        });
        it('Should call super_regions method on setupMapCommand if ICommandData.option is super_regions.', function () {
            // arange
            // act
            // assert
        });
        it('Should call neighbors method on setupMapCommand if ICommandData.option is neighbors.', function () {
            // arange
            // act
            // assert
        });
        // error string should be filled too.
        it('Should return Answer.succes = false if ICommandData.option not matches any option in setupMapCommand.', function () {
            // arange
            // act
            // assert
        });
        // error string should be filled too.
        it('Should return Answer.succes = false in Answer.value if ICommandData.option is undefined.', function () {
            // arange
            // act
            // assert
        });
        // error string should be filled too.
        it('Should return Answer.succes = false in Answer.value if ICommandData.option is null.', function () {
            // arange
            // act
            // assert
        });
    });
    // Het setup_map command kent verschillende opties waaronder deze regions. Met regions geeft de engine welke regions
    // er allemaal bestaan op de warMap.
    describe('regions', function () {
        // Every two numbers in data stand for one region and the superregion it is attached to in that order.
        // It should call addRegion for the amount of numbers in data devided by two.
        // It should call it with an IRegion instance with the right region id and superregion id.
        it('Should call addRegion on warMap.', function () {
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
    // Het setup_map command kent verschillende opties waaronder deze super_regions. Met super_regions geeft de engine welke super_regions
    // er allemaal bestaan op de warMap.
    describe('super_regions', function () {
        // Every two numbers in data stand for one super_region and the bonus the player receives every round for owning it.
        // It should call addSuperRegion for the amount of numbers in data devided by two.
        // It should call it with an ISuperRegion instance with the right superregion id and bonus.
        it('Should call addSuperRegion on warMap.', function () {
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
    // Het setup_map command kent verschillende opties waaronder deze neighbors. Met neighbors geeft de engine welke regions have 
    // which neigbors.
    describe('neighbors', function () {
        // Hij moet dus 8 keer getRegionById aanroepen met deze commandDataMock.
        it('Should call getRegionById for every region in the list.', function () {
            // arrange
            // act
            // assert
        });
    });
});
//# sourceMappingURL=SetupMapCommandSpec.js.map