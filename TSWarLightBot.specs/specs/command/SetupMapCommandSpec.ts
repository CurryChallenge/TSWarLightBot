﻿/*
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

import CommandEnum = require('../../../TSWarLightBot/enum/CommandEnum');
import OptionEnum = require('../../../TSWarLightBot/enum/OptionEnum');
import ICommandData = require('../../../TSWarLightBot/interface/ICommandData');
import IAnswer = require('../../../TSWarLightBot/interface/IAnswer');
import ShuffleArray = require('../../../TSWarLightBot/command/helper/ShuffleArray');
import Consts = require('../../../TSWarLightBot/Consts');
import util = require('util');

describe('setupMapCommand', (): void => {
    // Class for unit under test and variable for instance of unit under test.
    var SetupMapCommand: any = require('../../../TSWarLightBot/command/SetupMapCommand');
    var setupMapCommand: any;

    // Mocks and spies.
    var commandDataMock: ICommandData;
    var warMapSpy: any;

    beforeEach((): void => {
        // Creeer de unit under test en injecteer de mock en spy.
        setupMapCommand = new SetupMapCommand(warMapSpy);
    });

    describe('getAnswer', (): void => {
        beforeEach((): void => {
            commandDataMock = {
                line: 'setup_map regions 1 1 2 1 3 2 4 2 5 2',
                command: CommandEnum.setup_map,
                option: OptionEnum.regions,
                data: new ShuffleArray<string>(['1', '1', '2', '1', '3', '2', '4', '2', '5', '2'])
            };
        });

        it('Should call regions method on setupMapCommand if ICommandData.option is regions.', (): void => {
            // arange
            spyOn(setupMapCommand, 'regions');

            // act
            setupMapCommand.getAnswer(commandDataMock);

            // assert
            expect(setupMapCommand.regions).toHaveBeenCalledWith(commandDataMock);
            expect(setupMapCommand.regions.callCount).toBe(1);
        });

        // error string should be filled too.
        it('Should return Answer.succes = false in Answer.value if ICommandData.option not matches any option in setupMapCommand.', (): void => {
            // arange
            commandDataMock.option = OptionEnum.place_armies;
            commandDataMock.line = 'setup_map place_armies 1 1 2 1 3 2 4 2 5 2';

            // act
            var result: IAnswer = setupMapCommand.getAnswer(commandDataMock);

            // assert
            expect(result.succes).toBeFalsy();
            expect(result.value).toBe(util.format(Consts.UNABLE_TO_EXECUTE, commandDataMock.line));
        });

        // error string should be filled too.
        it('Should return Answer.succes = false in Answer.value if ICommandData.option is undefined.', (): void => {
            // arange
            commandDataMock.option = undefined;
            commandDataMock.line = 'setup_map 1 1 2 1 3 2 4 2 5 2';

            // act
            var result: IAnswer = setupMapCommand.getAnswer(commandDataMock);

            // assert
            expect(result.succes).toBeFalsy();
            expect(result.value).toBe(util.format(Consts.UNABLE_TO_EXECUTE, commandDataMock.line));
        });

        // error string should be filled too.
        it('Should return Answer.succes = false in Answer.value if ICommandData.option is null.', (): void => {
            // arange
            commandDataMock.option = null;
            commandDataMock.line = 'setup_map 1 1 2 1 3 2 4 2 5 2';

            // act
            var result: IAnswer = setupMapCommand.getAnswer(commandDataMock);

            // assert
            expect(result.succes).toBeFalsy();
            expect(result.value).toBe(util.format(Consts.UNABLE_TO_EXECUTE, commandDataMock.line));
        });
    });

    // Het setup_map command kent verschillende opties waaronder deze regions. Met regions de engine welke regions
    // er allemaal bestaan op de warMap.
    describe('regions', (): void => {
        beforeEach((): void => {
            commandDataMock = {
                line: 'setup_map regions 1 1 2 1 3 2 4 2 5 2',
                command: CommandEnum.setup_map,
                option: OptionEnum.regions,
                data: new ShuffleArray<string>(['1', '1', '2', '1', '3', '2', '4', '2', '5', '2'])
            };
        });

        it('Should do something', (): void => {
        });
    });
});
