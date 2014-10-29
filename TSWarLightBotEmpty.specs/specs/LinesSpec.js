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
var CommandEnum = require('../../TSWarLightBotEmpty/enum/CommandEnum');
var OptionEnum = require('../../TSWarLightBotEmpty/enum/OptionEnum');
var ShuffleArray = require('../../TSWarLightBotEmpty/command/helper/ShuffleArray');
describe('lines', function () {
    // Class for unit under test and variable for instance of unit under test.
    var Lines = require('../../TSWarLightBotEmpty/Lines');
    var lines;
    // Mocks and spies.
    var lineMock;
    // getCommandData zet de string die vanaf de game engine komt om naar een object met properties :
    // line (string). De orginele string van de engine.
    // commando (CommandEnum). De engine kent 6 verschillende commando's. Het is het eerste woord in de line string.
    // option (OptionEnum). Sommige commando's kennen verschillende opties; Het is het tweede woord in de line string of het ontbreekt.
    // data (string[]). Sommige commando's krijgen extra data mee. Het is het derde woord en de resterende woorden in de line string  
    // of het tweede woord en de resterende woorden als de optie ontbreekt of het ontbreekt in zijn geheel.
    describe('getCommandData', function () {
        beforeEach(function () {
            // Create an instance and pass null because we don't need the injected commandMethodList for these tests.
            lines = new Lines(null);
        });
        // Het resultaat van getCommandData is een ICommandData instantie en bevat een command property.
        it('Should return ICommandData.command is undefined when string contains null', function () {
            // arange
            lineMock = null;
            // act
            var result = lines.getCommandData(' ');
            // assert
            expect(result.command).toBe(undefined);
        });
        it('Should return ICommandData.command is undefined when the line contains only spaces', function () {
            // arange
            lineMock = ' ';
            // act
            var result = lines.getCommandData(lineMock);
            // assert
            expect(result.command).toBe(undefined);
        });
        it('Should return ICommandData.command is undefined when the line contains an invalid command', function () {
            // arange
            lineMock = 'invalid command';
            // act
            var result = lines.getCommandData(lineMock);
            // assert
            expect(result.command).toBe(undefined);
        });
        it('Should return ICommandData.command as CommandEnum.settings if the line contains settings', function () {
            // arange
            lineMock = 'settings your_bot player1';
            // act
            var result = lines.getCommandData(lineMock);
            // assert
            expect(result.command).toBe(2 /* settings */);
        });
        // Het resultaat van getCommandData is een ICommandData instantie en bevat een option property.
        it('Should return ICommandData.option as OptionEnum.your_bot if the line contains your_bot', function () {
            // arange
            lineMock = 'settings your_bot player1';
            // act
            var result = lines.getCommandData(lineMock);
            // assert
            expect(result.option).toBe(3 /* your_bot */);
        });
        // Een string met een / er in is niet een valide enum waarde dus hebben we de / verwijderd.
        it('Should return ICommandData.option is OptionEnum.attacktransfer if the line contains a attack/transfer', function () {
            // arange
            lineMock = 'go attack/transfer -t';
            // act
            var result = lines.getCommandData(lineMock);
            // assert
            expect(result.option).toBe(7 /* attacktransfer */);
        });
        // Controlleer of hij niet crashed op een missende option.
        it('Should return ICommandData.option undefined if the line contains only 1 linepart', function () {
            // arange
            lineMock = 'settings';
            // act
            var result = lines.getCommandData(lineMock);
            // assert
            expect(result.option).toBe(undefined);
        });
        // update_map 1 player1 2 2 player1 4 3 neutral 2 4 player2 5.
        it('Should return ICommandData.option undefined for the update_map command which has no options', function () {
            // arange
            lineMock = 'update_map 1 player1 2 2 player1 4 3 neutral 2 4 player2 5';
            // act
            var result = lines.getCommandData(lineMock);
            // assert
            expect(result.option).toBe(undefined);
        });
        // setup_map super_regions 1 2 2 5.
        // Resultaat zou ['1', '2', '2', '5'] moeten zijn.
        // Het resultaat van getCommandData is een ICommandData instantie en bevat een data property.
        it('Should return the right data for the CommandEnum.setup_map command with OptionEnum.super_regions.', function () {
            // arange
            lineMock = 'setup_map super_regions 1 2 2 5';
            // act
            var result = lines.getCommandData(lineMock);
            // assert
            expect(result.option).toBe(0 /* super_regions */);
            expect(result.data).toBe(['1', '2', '2', '5']);
        });
        // pick_starting_regions 2000 1 7 12 13 18 15 24 25 29 37 42 41.
        // resultaat zou ['2000', '1', '7', '12', '13', '18', '15', '24', '25', '29', '37', '42', '41'] moeten zijn.
        it('Should return the right data for the CommandEnum.pick_starting_regions which has no options', function () {
            // arange
            lineMock = 'pick_starting_regions 2000 1 7 12 13 18 15 24 25 29 37 42 41';
            // act
            var result = lines.getCommandData(lineMock);
            // assert
            expect(result.command).toBe(1 /* pick_starting_regions */);
            expect(result.data).toBe(['2000', '1', '7', '12', '13', '18', '15', '24', '25', '29', '37', '42', '41']);
        });
        // Het resultaat van getCommandData is een ICommandData instantie en bevat een line property.
        it('Should put origial line in line', function () {
            // arange
            lineMock = 'pick_starting_regions 2000 1 7 12 13 18 15 24 25 29 37 42 41';
            // act
            var result = lines.getCommandData(lineMock);
            // assert
            expect(result.line).toBe(lineMock);
        });
        // Controlleer ook of hij maar 1 keer wordt aangeroepen.
        it('Should call trim on the line.', function () {
            // arrange
            lineMock = 'pick_starting_regions 2000 1 7 12 13 18 15 24 25 29 37 42 41   ';
            var spy = spyOn(lineMock, 'trim').andCallThrough();
            // act
            var result = lines.getCommandData(lineMock);
            // assert
            expect(spy.calls.length).toEqual(1);
        });
    });
    // De game engine kent 6 verschillende commando's. De propery command in CommandData is een enum die deze commando's vertegenwoordigd.
    // De Commandata wordt opgehaald met een aanroep naar getCommandData. De applicatie heeft per commando een class in de map commando. 
    // Deze command classes implemeteren allemaal ICommand met de method getAnswer. De Lines class die we hier testen zorgt dat op de 
    // juiste  class instantie van de command classes de method getAnswer wordt aangeroepen. Er wordt een lijst met de methodes die 
    // aangroepen kunnen  worden geinjecteerd bij het instantiëren van Lines. Deze lijst is een "dictionary" die een CommandEnum aan een 
    // methode koppelt. Er is een Mock voor deze lijst geschreven en die wordt in de beforeeach geinjecteerd in de Lines instantie die we 
    // hier testen.
    describe('getAnswer', function () {
        // Mocks and spies.
        var settingMethodSpy;
        var commandMethodListMock;
        var commandDataMock;
        beforeEach(function () {
            // Creeer de commandMethodList mock die we voor de meeste tests nodig hebben en een overeenkomstige line. 
            // Zonodig kunnen deze in een it overschreven worden. Doe dit voor de aanroep van getAnswer.
            settingMethodSpy = jasmine.createSpy('settingMethod');
            commandMethodListMock = {};
            commandMethodListMock[2 /* settings */] = settingMethodSpy;
            lineMock = [CommandEnum[2 /* settings */], OptionEnum[3 /* your_bot */], 'player1'].join(' ');
            // Creer de commandData mock die we voor de meeste tests nodig hebben.
            // Zonodig kan deze in een it overschreven worden voor de aanroep van getAnswer.
            var data = new ShuffleArray(['player1']);
            commandDataMock = { line: lineMock, command: 2 /* settings */, data: data };
            lines = new Lines(commandMethodListMock);
        });
        // Er is een mock voor de commandData geschreven. Creeer een SpyOn voor getCommandData die deze data retourneerd. Op die manier hou 
        // je controle over de data die getCommandData retourneerd en kun je makkelijker testen. Ook scheid je ze het testen van getAnwer 
        // en getCommandData op deze wijze.
        // Controleer of getCommandData maar 1 keer wordt aangeroepen.
        // Controleer of getCommandData wordt aangeroepen met de line waarmee je getAnswer aanroept.
        it('Should call getCommandData on lines.', function () {
            // arange
            // act
            // assert
        });
        // Creeer een spy voor de getCommandData method op the lines instance.
        // Controlleer of de commandData doorgegeven wordt aan de methode die aangeroepen wordt.
        // Controlleer of het commando maar 1 keer wordt aangeroepen.
        it('Should call the command in commandData.command.', function () {
            // arange
            // act
            // assert
        });
        // Controleer ook of de IAnswer.value Consts.UNABLE_TO_EXECUTE is.
        it('Should return IAnswer.succes = false when commandData.command is undefined.', function () {
            // arange
            // act
            // assert
        });
        it('Should return IAnswer.succes = false when the commandMethodList method is null.', function () {
            // arange
            // act
            // assert
        });
        it('Should return IAnswer.succes = false when the commandMethodList method is undefined.', function () {
            // arange
            // act
            // assert
        });
    });
});
//# sourceMappingURL=LinesSpec.js.map