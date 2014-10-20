﻿/**
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

import ICommandAnswer = require('./interface/ICommandAnswer');

/**
 * Holds the answer from the bot and information if the command could be succesfully handled by the bot.
 */
class CommandAnswer implements ICommandAnswer {

    /**
     * Create an instance of the CommandAnswer class.
     * @constructor
     * @param succes {boolean} - Could the command succesfully be handled by the bot.
     * @param answer {string} - The answer from the bot to the command.
     */
    constructor(public succes: boolean, public value: string) {
    }
};

export = CommandAnswer;