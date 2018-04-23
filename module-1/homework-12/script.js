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
          decision=confirm(`Есть места в группе ${nameTour}.Резервируем?`);
           tourPlaces=taba;
           nameTour=`Taba`;
           if(decision){
              result=tourPlaces-userInput;
              alert(`Приятного путешествия в группе ${nameTour}`);
              break;
           }
        case userInput<=sharm:
          decision=confirm(`Есть места в группе ${nameTour}.Резервируем?`);
          tourPlaces=sharm;
          nameTour=`Sharm`;
          if(decision){
              result=tourPlaces-userInput;
              alert(`Приятного путешествия в группе ${nameTour}`);
              break;
           }
        case userInput<=hurgada:
           decision=confirm(`Есть места в группе ${nameTour}.Резервируем?`);
           tourPlaces=hurgada;
           nameTour=`Hurgada`;
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

