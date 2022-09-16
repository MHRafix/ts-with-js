export class Player {
	constructor(
		public name: string,
		public age: number,
		readonly rigion: string
	) {}

	play() {
		console.log(`${this.name} from ${this.rigion} is playing!`);
	}
}
