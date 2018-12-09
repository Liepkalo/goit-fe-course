'use strict';

{

	let userInput;
	const numbers = [];
	let total = 0;
	do {
		userInput = prompt(`Введите число`);
		userInput = Number(userInput);
		if (isNaN(userInput)) {
			alert('Было введено не число, попробуйте еще раз');
		} else userInput = Number(userInput);
		numbers.push(userInput);
	}
	while (userInput !== 0);

	console.log(numbers);
	for (let i = 0; i < numbers.length; i += 1) {
		total += numbers[i];
	}
	alert('Общая сумма чисел равна  ' + (total));
}