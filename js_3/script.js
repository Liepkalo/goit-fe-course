'use strict';

let userLoginInput;
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
userLoginInput = prompt('Введите логин');
let checkLoginUnique;
let checkLoginValid;
checkLoginUnique = logins.includes(userLoginInput);

const isLoginUnique = function (logins, userLoginInput) {
    return !checkLoginUnique;
};


const isLoginValid = function (userLoginInput) {
    if (userLoginInput.length >= 4 && userLoginInput.length <= 16) {
        checkLoginValid = true;
        return checkLoginValid;
    } else {
        checkLoginValid = false;
        return checkLoginValid;
    }
};

const addLogin = function (logins, login) {
    if (checkLoginValid === true && checkLoginUnique === false) {
        logins.push(userLoginInput);
        console.log('логин успешно добавлен');
        return logins;
    } else if (checkLoginValid === false && checkLoginUnique === false) {
        console.log("Ошибка! Логин должен быть от 4 до 16 символов");
        return false;
    } else {
        console.log("Такой логин уже используется!");
        return false;
    }
}


console.log('Валидность:', isLoginValid(userLoginInput));
console.log('Уникальность:', isLoginUnique(logins, userLoginInput));
console.log(addLogin(logins, userLoginInput));