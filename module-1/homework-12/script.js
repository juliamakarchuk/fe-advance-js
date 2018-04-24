let taba=6;
let sharm=15;
let hurgada=25;
let tourPlaces;
let nameTour;
let result;
let decision;

let  userInput=Number(prompt(`Введите число`));

const isValidInput=userInput!==null&&!Number.isNaN(userInput);
if(isValidInput){
      switch (true){
      	case userInput<=taba:
           tourPlaces=taba;
           nameTour=`Taba`;
          decision=confirm(`Есть места в группе ${nameTour}.Резервируем?`);
           if(decision){
              result=tourPlaces-userInput;
              alert(`Приятного путешествия в группе ${nameTour}`);
              break;
           }
        case userInput<=sharm:
          tourPlaces=sharm;
          nameTour=`Sharm`;
          decision=confirm(`Есть места в группе ${nameTour}.Резервируем?`);
          if(decision){
              result=tourPlaces-userInput;
              alert(`Приятного путешествия в группе ${nameTour}`);
              break;
           }
        case userInput<=hurgada:
           tourPlaces=hurgada;
           nameTour=`Hurgada`;
           decision=confirm(`Есть места в группе ${nameTour}.Резервируем?`);
            if(decision){
              result=tourPlaces-userInput;
              alert(`Приятного путешествия в группе ${nameTour}`);
              break;
           }
           default:
           alert(`Извините, мест нет.`);
       }
  }
else{
	alert(`Ошибка ввода`);
}

