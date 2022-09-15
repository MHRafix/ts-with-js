/**
 * use type in class
 */

class Player {
	constructor(private name: string, age: number, readonly rigion: string) {}

	play() {
		console.log(`${this.name} from ${this.rigion} is playing!`);
	}
}

const mashrafi = new Player('Mashrafi', 40, 'Bangladesh');
const sakib = new Player('Sakib', 36, 'Bangladesh');

const players: Player[] = [];

players.push(sakib);
players.push(mashrafi);
