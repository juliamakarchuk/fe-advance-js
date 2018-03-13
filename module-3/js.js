

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const keyboard=alphabet.split("");
const array= [keyboard.slice(0, keyboard.indexOf('a')), keyboard.slice(keyboard.indexOf('a'),keyboard.indexOf('z')), keyboard.slice(keyboard.indexOf('z'))];
const wordHello=`${array[1][5]}${array[0][2]}${array[1][8]}${array[1][8]}${array[0][8]}`;
const wordJavaScript=`${array[1][6]}${array[1][0]}${array[2][3]}${array[1][0]}${array[1][1]}${array[2][2]}${array[0][3]}${array[0][7]}${array[0][9]}${array[0][4]}`;
const wordTrainer=`${array[0][4]}${array[0][3]}${array[1][0]}${array[0][7]}${array[2][5]}${array[0][2]}${array[0][3]}`;
console.log(wordHello);
console.log(wordJavaScript);
console.log(wordTrainer)
