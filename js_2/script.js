'use strict';

let userInput;
const numbers = [];
let total = 0;
do {
	userInput = prompt("Введите число");

	if (!isNaN(userInput)) {
		numbers.push(userInput);
	} else if (isNaN(userInput)) {
		alert("Было введено не число, попробуйте еще раз");
		numbers.push(0);
	}

}

while (userInput !== null);
for (let i = 0; i < numbers.length; i += 1) {
	total += Number(numbers[i]);
}

alert('Общая сумма чисел равна  ' + total);