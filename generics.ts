/**
 * generics in typescript
 */

enum RType {
	SUCCESS,
	FAILURE,
	UNAUTHENTICATED,
	FORBIDDEN,
}

// generics in interface
interface ApiResponse<T> {
	status: number;
	type: RType;
	data: T;
}

const res1: ApiResponse<object> = {
	status: 200,
	type: RType.SUCCESS,
	data: {
		name: 'Testing',
		something: 3000,
	},
};

// generics on function
const addID = <
	T extends {
		name: string;
		age: number;
		rigion: string;
	}
>(
	obj: T
) => {
	let id = Math.floor(Math.random() * 100);
	return { ...obj, id };
};

let user = addID({ name: 'Mehedi', age: 20, rigion: 'Afgan' });
