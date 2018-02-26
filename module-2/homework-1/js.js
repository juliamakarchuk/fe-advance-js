let firstResort="Taba";
let secondResort="Sharm";
let thirdResort="Hurgada";

let number=prompt('Введите номер курорта. 1-Таба, 2-Шарм, 3-Хургада');
if(number==1){
	result=`Вы выбрали курорт под названием ${firstResort}. Хорошего Отдыха!`;
}
else if(number==2){
	result=`Вы выбрали курорт под названием ${secondResort}. Хорошего Отдыха!`;
}
else if(number==3){
	result=`Вы выбрали курорт под названием ${thirdResort}. Хорошего Отдыха!`;;
}
else{

    let number=prompt('Вы ввели неправильный номер.Попробуйте еще разок. 1-Таба, 2-Шарм, 3-Хургада');
	
}
alert(result);
