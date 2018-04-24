const passwords=['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let  userInput=prompt(`Введите пароль`);


for(n=2;n>=0;n--){
	if(passwords.includes(userInput)){
		alert(`Добро пожаловать!`);
		break;
	}
	else if(userInput===null){
		break;
	}
	else if(n>0){
        alert(`Неверный пароль, у вас осталось ${n} попыток`);
	    userInput=prompt(`Vvedite parol`);
	}
   else if(n===0){
      alert(`У вас закончились попытки, аккаунт заблокирован!`);
   }
}


