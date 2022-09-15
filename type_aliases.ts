/**
 * type aliases
 */

// type aliases
type strOrNum = string | number;
type userType = { name: string; age: number };

const userDetails = (id: strOrNum, user: userType) => {
	console.log(
		`User id is ${id} + user name is ${user.name} + user age is ${user.age}`
	);
};

const printHello = (user: userType) => {
	console.log(`Hello ${user.age > 50 ? 'Sir' : 'Mr.'}  ${user.name}`);
};
