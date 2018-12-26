'use strict';
let userLoginInput;
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
userLoginInput = prompt('Введите логин');


const isLoginUnique = function (logins, userLoginInput) {
    return !logins.includes(userLoginInput);
};

const isLoginValid = function (userLoginInput) {
    if (userLoginInput.length >= 4 && userLoginInput.length <= 16) {
        return true;
    } else {
        return false;
    }
};

const addLogin = function (logins, userLoginInput) {
    if (userLoginInput === null) return "пользователь нажал отмену";
    const valid = isLoginValid(userLoginInput);
    if (!valid) return "Ошибка! Логин должен быть от 4 до 16 символов";
    const unique = isLoginUnique(logins, userLoginInput);
    if (!unique) return "Такой логин уже используется!";
    logins.push(userLoginInput);
    return console.log(logins, 'логин успешно добавлен');
};

console.log(addLogin(logins, userLoginInput));