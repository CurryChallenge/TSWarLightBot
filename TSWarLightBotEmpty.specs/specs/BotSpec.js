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
/// <reference path="../Scripts/typings/jasmine/legacy/jasmine-1.3.d.ts" />
'use strict';
require('readline');
var CommandEnum = require('../../TSWarLightBotEmpty/enum/CommandEnum');
var OptionEnum = require('../../TSWarLightBotEmpty/enum/OptionEnum');
describe('bot', function () {
    // Class for unit under test and variable for instance of unit under test.
    var Bot = require('../../TSWarLightBotEmpty/Bot');
    var bot;
    // Mocks and spies.
    var ioSpy = jasmine.createSpyObj('io', ['on']);
    var linesSpy;
    var botProcessSpy;
    var answerMock;
    var lineMock;
    // References to the methodes the bot couples to the events.
    var lineListener;
    var closeListener;
    beforeEach(function () {
        ioSpy = jasmine.createSpyObj('io', ['on']);
        ioSpy.on.andCallFake(function (event, listener) {
            if (event === 'line') {
                lineListener = listener;
            }
            ;
            if (event === 'close') {
                closeListener = listener;
            }
        });
        answerMock = {
            succes: true,
            value: ''
        };
        linesSpy = jasmine.createSpyObj('lines', ['getAnswer']);
        linesSpy.getAnswer.andReturn(answerMock);
        botProcessSpy = {
            stdout: jasmine.createSpyObj('stdout', ['write']),
            stderr: jasmine.createSpyObj('stderr', ['write']),
            exit: jasmine.createSpy('exit')
        };
        lineMock = [CommandEnum[2 /* settings */], OptionEnum[3 /* your_bot */], 'player1'].join(' ');
        bot = new Bot(ioSpy, linesSpy, botProcessSpy);
    });
    describe('run', function () {
        // io.on attaches events for reading from the console and closing the console.
        // call count should be 2.
        it('Should call io.on with line and close arguments.', function () {
            // arange
            // act
            bot.run();
            // assert
            expect(ioSpy.on).toHaveBeenCalledWith('line', jasmine.any(Function));
            expect(ioSpy.on).toHaveBeenCalledWith('close', jasmine.any(Function));
            expect(ioSpy.on.callCount).toBe(2);
        });
        // Check if the line is handed to the handLine method.
        it('Should attach bot.handleLine and bot.handleClose to the io.on line and io.on close events.', function () {
            // arange
            spyOn(bot, 'handleLine');
            spyOn(bot, 'handleClose');
            // act
            bot.run();
            lineListener(lineMock);
            closeListener();
            // assert
            expect(bot.handleLine).toHaveBeenCalledWith(lineMock);
            expect(bot.handleLine.callCount).toBe(1);
            expect(bot.handleClose.callCount).toBe(1);
        });
    });
    describe('handleLine', function () {
        // lines get injected in the Bot instances.
        // should only be called once. 
        it('Should call getAnswer on lines if called with the line.', function () {
            // arange
            // act
            bot.handleLine(lineMock);
            // assert
            expect(linesSpy.getAnswer.callCount).toBe(1);
        });
        // lines get injected in the Bot instances.
        it('Should NOT call getAnswer on lines if line is empty.', function () {
            // arange
            // act
            bot.handleLine('');
            // assert
            expect(linesSpy.getAnswer.callCount).toBe(0);
        });
        // process get injected in the Bot instances.
        // Should call stdout one time. Should NOT call stderr.
        // Should only call if value is not an empty string.
        it('Should call botProcess.stdout.write if result is succesfull.', function () {
            // arange
            answerMock.succes = true;
            answerMock.value = 'test';
            // act
            bot.handleLine(lineMock);
            // assert
            expect(botProcessSpy.stdout.write.callCount).toBe(1);
            expect(botProcessSpy.stderr.write.callCount).toBe(0);
        });
        it('Should not call botProcess.stdout.write if result is succesfull but value is empty.', function () {
            // arange
            answerMock.succes = true;
            answerMock.value = '';
            // act
            bot.handleLine(lineMock);
            // assert
            expect(botProcessSpy.stdout.write.callCount).toBe(0);
            expect(botProcessSpy.stderr.write.callCount).toBe(0);
        });
        // botProcess get injected in the Bot instances.
        // Should NOT call stdout. Should call stderr one time.
        // Check if command.value is passes to write.
        it('Should call botProcess.stderr.write if commandName is NOT succesfull.', function () {
            // arange
            answerMock.succes = false;
            answerMock.value = 'Unable to execute command: doesnotexcist';
            // act
            bot.handleLine('doesnotexcist');
            // assert
            expect(botProcessSpy.stderr.write).toHaveBeenCalledWith(answerMock.value);
            expect(botProcessSpy.stderr.write.callCount).toBe(1);
            expect(botProcessSpy.stdout.write.callCount).toBe(0);
        });
    });
    describe('handleClose', function () {
        // Should call exit one time.
        it('Should call botProcess.exit.', function () {
            // act
            bot.handleClose();
            // assert
            expect(botProcessSpy.exit).toHaveBeenCalled();
            expect(botProcessSpy.exit.callCount).toBe(1);
        });
    });
});
//# sourceMappingURL=BotSpec.js.map