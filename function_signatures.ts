/**
 * function signatures
 */

// function signatures
let add: (x: number, y: number) => number;
let calculation: (a: number, b: number, c: string) => number;

// functions
add = (a: number, b: number) => {
	return a + b;
};

calculation = (a: number, b: number, c: string) => {
	if ((c = 'add')) {
		return a + b;
	} else {
		return a - b;
	}
};

calculation(45, 25, 'add');
