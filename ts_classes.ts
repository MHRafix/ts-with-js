import { Player } from './classes/Player.js';
import { IsPlayer } from './interfacess/IsPlayer.js';

/**
 * use type in class
 */

const mashrafi = new Player('Mashrafi', 40, 'Bangladesh');

let sakib: IsPlayer;
sakib = new Player('Sakib', 35, 'Bangladesh');

const players: IsPlayer[] = [];

players.push(sakib);
players.push(mashrafi);
