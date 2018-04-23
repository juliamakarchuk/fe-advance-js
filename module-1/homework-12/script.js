let taba=6;
let sharm=15;
let hurgada=25;
let tourPlaces;
let nameTour;
let result;
let decision;

let  userInput=Number(prompt(`Vedite chislo`));

const isValidInput=userInput!==null&&!Number.isNaN(userInput);
if(isValidInput){
      switch (true){
      	case userInput<=taba:
          decision=confirm(`Do you wanna be in taba\`s group?`);
           tourPlaces=taba;
           nameTour=`Taba`;
           if(decision){
              result=tourPlaces-userInput;
              alert(`Приятного путешествия в группе ${nameTour}`);
              break;
           }
        case userInput<=sharm:
          decision=confirm(`Do you wanna be in sharm\`s group?`);
          tourPlaces=sharm;
          nameTour=`Sharm`;
          if(decision){
              result=tourPlaces-userInput;
              alert(`Приятного путешествия в группе ${nameTour}`);
              break;
           }
        case userInput<=hurgada:
           decision=confirm(`Do you wanna be in hurgada\`s group?`);
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

