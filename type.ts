// normal type veriable
let a: string;

// union type
let b: string | number | boolean;

// normal type array
let array: string[] = [];
array.push('Tweleve 12');

// union type array
let c: (number | string | boolean | object)[] = [];

c.push(12, 'fhdjhfjdf', true);

// normal type object
let obj: object;

obj = {
	name: 'Mehedi',
	age: '20',
	isAdult: 'true',
};

// union || schema type object
let obj2: {
	name: string;
	age: number;
	isAdult: boolean;
};

obj2 = {
	name: 'Mehedi',
	age: 20,
	isAdult: true,
};
