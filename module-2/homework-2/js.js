let number=parseInt(prompt('Введите число участников группы.'));
let sharm=parseInt("15");
let hurgada=parseInt("25");
let taba=parseInt("6");

if(number<=25&&number>0||number==Number){
   if(number>1&&number<=6){
   	  let reservation=confirm(`Есть место в Табе.Резервируем?`);
   	  if(reservation){
   		result=taba-number;
   		alert(`Осталось мест в группе: ${result}`);
   	  }
   	 else{
   		  let reservation=confirm(`Есть место в Шарме.Резервируем?`);
   		  if(reservation){
   			result=sharm-number;
   			alert(`Осталось мест в группе: ${result}`);}
   		 else{
   			let reservation=confirm(`Есть место в Хургаде.Резервируем?`);
  	      	if(reservation){
     	   result=hurgada-number;
     	   alert(`Осталось мест в группе: ${result}`);
            }
            else{
          	alert(`Мест больше нигде нет`);
          }
   		 }
   		 }
   	 }
   	 //////////////////
else if (number>0&&number<=15){
     let reservation=confirm(`Есть место в Шарме.Резервируем?`);
     if(reservation){
     	result=sharm-number;
     	alert(`Осталось мест в группе: ${result}`);
     }
 else{
 	let reservation=confirm(`Есть место в Хургаде.Резервируем?`);
       	  if(reservation){
          result=hurgada-number;
  	      alert(`Осталось мест в группе: ${result}`);}
  	      else{
  	      	alert(`Мест больше нигде нет`);
  	      }
 }
}
//////////
else if(number>0&&number<=25){
	let reservation=confirm(`Есть место в Хургаде.Резервируем?`);
	if(reservation){
		result=hurgada-number;
		alert(`Осталось мест в группе: ${result}`);
	}
	else{
		alert(`Мест больше нигде нет`);
	}
}

}
else if(number>25){
	alert(`Слишком много людей.У нас нет столько мест.`);

}
else{
	alert(`Вы ввели некоректные данные!!!`)
}