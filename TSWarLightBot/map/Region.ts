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
import IRegion = require('I/IRegion');
import ISuperRegion = require('I/ISuperRegion');
import PossibleOwners = require('PossibleOwners');

class Region implements IRegion {
    id: number;
    superRegion: ISuperRegion;
    owner: PossibleOwners;
    neighbors: IRegion[];
    troopCount: number;
    isOnEmpireBorder: boolean;
    isOnSuperRegionBorder: boolean;


    constructor(id: number, superRegion: ISuperRegion) {
        this.id = id;
        this.superRegion = superRegion;
        this.owner = PossibleOwners.NEUTRAL;
        this.neighbors = [];
        this.troopCount = 2;
        this.isOnEmpireBorder = false;
        this.isOnSuperRegionBorder = false;
    }
}

export = Region;