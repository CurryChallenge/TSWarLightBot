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

import ILines = require('ILines');
import ICommandAnswer = require('ICommandAnswer');
import ICommandData = require('ICommandData');
import ICommandMethod = require('ICommandMethod');
import Messages = require('./Messages');
import CommandEnum = require('./CommandEnum');
import SubCommandEnum = require('./SubCommandEnum');
import util = require('util');
import _ = require('underscore');

/**
 * Converts lines to command information and passes it to the right command class and returns the answer.
 */
class Lines implements ILines {
    constructor(private commandMethodList: ICommandMethod[]) {
    } 

    /**
     * Gets the answer from the bot by passing a command to the right command class.
     * @param line {string} - string containing the command information.
     * @returns {ICommandData} - The command answer.
     * Example : getCommandAnswer('pick_starting_regions 2000 1 7 12 13 18 15 24 25 29 37 42 41');
     */
    public getCommandAnswer(line: string): ICommandAnswer {
        var commandData: ICommandData = this.getCommandData(line);
        var commandMethod: ICommandMethod = _.find(this.commandMethodList, (commandMethod: ICommandMethod) => { 
            return commandMethod.command === commandData.command;
        });

        if (commandMethod && !(commandMethod.method == null)) {
            return commandMethod.method(commandData);
        } else {
            return {
                succes: false,
                value: util.format(Messages.UNABLE_TO_EXECUTE, line)
            }
        }
    }

    /**
     * Gets a ICommandData by converting a string containing the information.
     * @param line {string} - string containing the command information.
     * @returns {ICommandData} - The command information.
     * Example : getCommandData('settings opponent_bot player2');
     */
    public getCommandData(line: string): ICommandData {
        var lineParts: string[] = line.split(' ');
        return {
            command: this.getEnum(lineParts, CommandEnum, 0),
            subCommand: this.getEnum(lineParts, SubCommandEnum, 1),
            data: []
        }
    }

    private getEnum(lineParts: string[], enumType: any, position: any): any {
        if (lineParts.length <= position) {
            return undefined;
        }

        // Example
        // enum SubCommandEnum {
        //    super_regions
        // }
        // We want "0" to return undefined and not "super_regions"
        // "super_regions" will return 0 and pass this test.
        if (typeof enumType[lineParts[position]] === 'string') {
            return undefined;
        }

        return enumType[lineParts[position]];
    }
}

export = Lines;