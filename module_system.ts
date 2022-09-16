/**
 * use module system in ts
 */

import { Player } from './classes/Player.js';

const mashrafi = new Player('Mashrafi', 40, 'Bangladesh');
const sakib = new Player('Sakib', 36, 'Bangladesh');

const players: Player[] = [];

players.push(sakib);
players.push(mashrafi);
