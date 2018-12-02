'use strict';

const adminLogin = 'admin';
const adminPassword = 'm4ng0h4ckz';

const InputadminLogin = prompt('Введите логин');

if (InputadminLogin === null) {
	alert('Отменено пользователем!');
} else if (InputadminLogin != adminLogin) {
	alert('Доступ запрещен, неверный логин!');
} else if (InputadminLogin === adminLogin) {
	//alert('Введите пароль');
	const InputadminPassword = prompt('Введите пароль');
	if (InputadminPassword === null) {
		alert('Отменено пользователем!');
	} else if (InputadminPassword != adminPassword) {
		alert('Доступ запрещен, неверный пароль!');
	} else if (InputadminPassword === adminPassword) {
		alert('Добро пожаловать!');
	}
}
