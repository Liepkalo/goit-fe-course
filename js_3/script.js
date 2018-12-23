'use strict';
let userLoginInput;
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
userLoginInput = prompt('Введите логин');
let checkLoginUnique;
let checkLoginValid;

const isLoginUnique = function (logins, userLoginInput) {
    for (let i = 0; i < logins.length; i += 1) {
        if (userLoginInput === logins[i]) {
            checkLoginUnique = false;
            return checkLoginUnique;
        } else if (userLoginInput != logins[i]) {
            checkLoginUnique = true;
            return checkLoginUnique;
        }
    }
};

const isLoginValid = function (userLoginInput) {
    if (userLoginInput.length >= 4 && userLoginInput.length <= 16) {
        checkLoginValid = true;
        return checkLoginValid;
    } else if (userLoginInput < 4 || userLoginInput > 16) {
        checkLoginValid = false;
        return checkLoginValid;
    }
};

const addLogin = function (logins, login) {
    if (checkLoginValid === true && checkLoginUnique === true) {
        logins.push(userLoginInput);
        console.log('логин успешно добавлен');
        return logins;
    } else if (checkLoginValid === false && checkLoginUnique === true) {
        console.log("Ошибка! Логин должен быть от 4 до 16 символов");
        return false;
    } else if (checkLoginValid === true && checkLoginUnique === false) {
        console.log("Такой логин уже используется!");
        return false;
    } else if (checkLoginValid === false && checkLoginUnique === false) {
        console.log("Ошибка! Логин должен быть от 4 до 16 символов");
        return false;
    }
};

console.log('Валидность:', isLoginValid(userLoginInput));
console.log('Уникальность:', isLoginUnique(logins, userLoginInput));
console.log(addLogin(logins, userLoginInput));