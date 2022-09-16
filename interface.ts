/**
 * interface in typescript
 */

import { IsPlayer } from './interfacess/IsPlayer.js';

// interface in object
interface RectangleOptions {
	width: number;
	length: number;
}

function drawRectangle(options: RectangleOptions) {
	let width = options.width;
	let length = options.length;
}

let threeDoptions = {
	width: 40,
	length: 15,
	height: 10,
};

drawRectangle(threeDoptions);

// interface in class
class Player2 implements IsPlayer {
	constructor(
		public name: string,
		public age: number,
		readonly rigion: string
	) {}

	play() {
		console.log(`${this.name} from ${this.rigion} is playing!`);
	}
}
