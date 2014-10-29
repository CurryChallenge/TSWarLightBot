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
/**
 * Instantiates the main class (Bot) injects all the dependencies and starts the bot.
 */
var Bot = require('./Bot');
var readline = require('readline');
var Lines = require('./Lines');
var GoCommand = require('./command/GoCommand');
var OpponentMovesCommand = require('./command/OpponentMovesCommand');
var PickStartingRegionsCommand = require('./command/PickStartingRegionsCommand');
var SettingsCommand = require('./command/SettingsCommand');
var SetupMapCommand = require('./command/SetupMapCommand');
var UpdateMapCommand = require('./command/UpdateMapCommand');
var CommandEnum = require('./enum/CommandEnum');
var WarMap = require('./map/WarMap');
var settings = {};
var warMap = new WarMap();
var goCommand = new GoCommand(settings, warMap);
var opponentMovesCommand = new OpponentMovesCommand();
var pickStartingRegionsCommand = new PickStartingRegionsCommand();
var settingsCommand = new SettingsCommand(settings);
var setupMapCommand = new SetupMapCommand(warMap);
var updateMapCommand = new UpdateMapCommand(settings, warMap);
var commandMethods = {};
commandMethods[5 /* go */] = goCommand.getAnswer;
commandMethods[4 /* opponent_moves */] = opponentMovesCommand.getAnswer;
commandMethods[1 /* pick_starting_regions */] = pickStartingRegionsCommand.getAnswer;
commandMethods[2 /* settings */] = settingsCommand.getAnswer;
commandMethods[0 /* setup_map */] = setupMapCommand.getAnswer;
commandMethods[3 /* update_map */] = updateMapCommand.getAnswer;
var readLineOptions = {
    input: process.stdin,
    output: process.stdout
};
var io = readline.createInterface(readLineOptions);
var lines = new Lines(commandMethods);
var bot = new Bot(io, lines, process);
bot.run();
//# sourceMappingURL=Runner.js.map