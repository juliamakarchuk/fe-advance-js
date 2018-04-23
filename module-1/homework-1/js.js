let sharm=15;
let hurgada=25;
let taba=6;
let result;
let decision;
let nameTour;
let tourPlaces;

const number=Number(prompt(`Введите число`));

if(!isNaN(number)&&number>0){
	if(number<=taba){
      nameTour=`Taba`;
      tourPlaces=taba;
       decision=confirm(`Есть места в группе Taba.Резервируем?`);
	}
   else if(number<=sharm){
        nameTour=`Sharm`;
        tourPlaces=sharm;
        decision=confirm(`Есть места в группе Sharm.Резервируем?`);
   }
   else if(number<=hurgada){
        nameTour=`Hurgada`;
        tourPlaces=hurgada;
   	  decision=confirm(`Есть места в группе Hurgada.Резервируем?`);
   }
   else{
   	alert(`Извините, мест нет`);
   }
 
 if(decision){
        result=tourPlaces-number;
        alert(`Приятного путешествия в группе ${nameTour}`);
       }
       else{
        alert(`Нам очень жаль, приходите еще!`);
       }
 
}
else{
	alert(`Ошибка ввода`);
}
