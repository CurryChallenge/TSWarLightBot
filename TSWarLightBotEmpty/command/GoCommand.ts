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
'use strict';

import ICommand = require('./interface/ICommand');
import IOptionSetting = require('./interface/IOptionSetting');
import ICommandMethod = require('./../interface/ICommandMethod');
import IAnswer = require('./../interface/IAnswer');
import ICommandData = require('./../interface/ICommandData');
import IMoveData = require('./../command/interface/IMoveData');
import OptionEnum = require('../enum/OptionEnum');
import IWarMap = require('../map/interface/IWarMap');
import IRegion = require('../map/interface/IRegion');
import PossibleOwnersEnum = require('../map/enum/PossibleOwnersEnum');
import Consts = require('../Consts');
import util = require('util');

/*
 * Handles go command from the game engine. Request for the bot to return his place armies moves  and request for the bot 
 * to return his attack and/or transfer moves.
 */
class Go implements ICommand {
    private optionMethodList: ICommandMethod = {};

    /*
     * Create an instance of the Go class.
     * @constructor
     * @param settings {IOptionSetting} - Settings with information needed by this command.
     * @param warMap {IWarMap} - Information about the map on which the game is played.
     */
    constructor(private settings: IOptionSetting, private warMap: IWarMap) {
    }

    /*
     * Gets the answer from the bot for the go command.
     * @param data {ICommandData} - Information about the command.
     * @returns {ICommandData} - The command answer.
     * Example: 
     * getAnswer({ 
     *     line: 'go place_armies 2000'
     *     command: CommandEnum.go,
     *     option: OptionEnum.place_armies,
     *     data: ['2000']
     * });
     * returns:
     *      {
     *          succes: true,
     *          value: 'player1 place_armies 1 1, player1 place_armies 1 1, player1 place_armies 1 1'
     *      }
     */
    public getAnswer(commandData: ICommandData): IAnswer {
        return null;
    }

    /*
     * Gets the answer from the bot for the go command with the place_armies option.
     * @param data {ICommandData} - Information about the command.
     * @returns {ICommandData} - The command answer.
     * Example: getAnswer({ 
     *             line: 'go place_armies 2000'
     *             command: CommandEnum.go,
     *             option: OptionEnum.place_armies,
     *             data: ['2000']
     *          });
     * 
     * Example return:
     * {
     *     succes: true,
     *     value: 'player1 place_armies 1 1, player1 place_armies 1 1, player1 place_armies 1 1'
     * }
     */
    public place_armies(commandData: ICommandData): IAnswer {
        return null;
    }

    /*
     * Gets the answer from the bot for the go command with the place_armies option.
     * @param data {ICommandData} - Information about the command.
     * @returns {ICommandData} - The command answer.
     * Example: getAnswer({ 
     *             line: 'go attack/transfer 2000'
     *             command: CommandEnum.go,
     *             option: OptionEnum.attacktransfer,
     *             data: ['2000']
     *          });
     * 
     * Example return:
     * {
     *     succes: true,
     *     value: 'player1 attack/transfer 1 3 5, player1 attack/transfer 2 1 2'
     * }
     */
    public attacktransfer(commandData: ICommandData): IAnswer {
        return null;
    }

    /* tslint:disable:max-line-length */
    /*
     * Gets the regions which the bot could attack or transfer troops to.
     * @param ownedRegions {IRegion[]} - Regions from which the attack or tranfer starts. The neighbors are the region are potential
     *                                   regions to attack or transfer to.
     * @param own {boolean} - If own is true it is a transfer and are we look for neighbors we allready own. Otherwise it's a attack.
     * @param numberOfTroops {number} - The number of troops which should be on the region the transfer or attack starts from
     *                                  before we transfer or attack.
     * @returns {IMoveData} - Information about the move.
     * Example: getRegionsToAttackTransfer([ { id : 1, superRegion : null, owner : 2, neighbors : 
     *                                       [ { id : 2, superRegion : null, owner : 2, neighbors : [  ], troopCount : 1, isOnEmpireBorder : false, isOnSuperRegionBorder : false }, 
     *                                         { id : 3, superRegion : null, owner : 1, neighbors : [  ], troopCount : 1, isOnEmpireBorder : false, isOnSuperRegionBorder : false }, 
     *                                         { id : 4, superRegion : null, owner : 0, neighbors : [  ], troopCount : 1, isOnEmpireBorder : false, isOnSuperRegionBorder : false } ], troopCount : 1, isOnEmpireBorder : false, isOnSuperRegionBorder : false }, 
     *                                       { id : 2, superRegion : null, owner : 2, neighbors : [  ], troopCount : 1, isOnEmpireBorder : false, isOnSuperRegionBorder : false } ], false, 7)
     * 
     * Example return:
     *           {
     *               regionTo: { id : 3, superRegion : null, owner : 1, neighbors : [  ], troopCount : 1, isOnEmpireBorder : false, isOnSuperRegionBorder : false }
     *               regionFrom: { id : 1, superRegion : null, owner : 2, neighbors : 
     *                         [ { id : 2, superRegion : null, owner : 2, neighbors : [  ], troopCount : 1, isOnEmpireBorder : false, isOnSuperRegionBorder : false }, 
     *                           { id : 3, superRegion : null, owner : 1, neighbors : [  ], troopCount : 1, isOnEmpireBorder : false, isOnSuperRegionBorder : false }, 
     *                           { id : 4, superRegion : null, owner : 0, neighbors : [  ], troopCount : 1, isOnEmpireBorder : false, isOnSuperRegionBorder : false } ], troopCount : 1, isOnEmpireBorder : false, isOnSuperRegionBorder : false }
     *           } 
     */
    /* tslint:enable:max-line-length */
    public getRegionsToAttackTransfer(ownedRegions: IRegion[], own: boolean, numberOfTroops: number): IMoveData[]{
        return null;
    }
}

export = Go;