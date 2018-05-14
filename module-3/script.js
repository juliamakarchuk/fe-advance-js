const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
login = prompt(`Введите пароль`, ``);


function addLogins(logins, login) {
function checkLoginValidity(login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
  	return false;
  }
};


  if (!checkLoginValidity(login)) {
  	return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }


function chekIfLoginExists(logins, login) {
  let result;
  for (const value of logins) {
    if (login === value){
  	  result = true;
  	  break;
  	}
  	result = false;
  	}
  	return result;
  };


  if (!chekIfLoginExists(logins, login)) {
  	logins.push(login);
  	return logins;
  } else { 
  	return 'Такой логин уже используется!';
  }
};
console.log( addLogins(logins, login) );