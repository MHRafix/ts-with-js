/**
 * explecit type
 */

// normal type veriable
let a: string;

// union type
let b: string | number | boolean;

// normal type array
let array: string[] = [];
array.push('Tweleve 12');

// union type array
let c: (number | string | boolean | object)[] = [];

c.push(12, 'Hello Borther!', true);

// normal type object
let obj: object;

obj = {
	name: 'Mehedi',
	age: '20',
	isAdult: 'true',
};

// array is a one kind of object
obj = [1, 2, 3];

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

/**
 * any type or dynamic type
 */

// any type veriable
let anyV: any;

// support all type
anyV = 5;
anyV = 'Five';
anyV = false;
anyV = undefined;
anyV = null;

// any type array
let anyArr: any[] = [];

anyArr.push('Support All Type');
anyArr.push(101);
anyArr.push(true);

// any type object
let anyObj: {
	name: any;
	age: any;
};

anyObj = {
	name: 12,
	age: 'Twenty',
};

/**
 * function type
 */

let tsFunc: Function;

tsFunc = () => {
	console.log('hello');
};

/**
 * function perameter, argument && return type
 */

const tsFunc2 = (a: string, b: number, c: boolean = false): string => {
	return `${a} + ${b} + ${c}`;
};

tsFunc2('A', 12, true);
