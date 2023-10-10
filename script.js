
// Vse metodi sozdayut novie massivi. Tolko forEach menyaet tekushiy massiv

let users = [
	{name: 'Vasya', surname: 'Pupkin', id: 1},
	{name: 'Petya', surname: 'Ivanov', id: 2},
	{name: 'Masha', surname: 'Petrov', id: 3}
];

let array = users.map((item) => {
	return {
		fullName: `${item.name} ${item.surname}`,
		id: item.id
	}
})

console.log(array);