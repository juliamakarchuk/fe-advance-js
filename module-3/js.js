

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const keyboard=alphabet.split("");
const massiv= [keyboard.slice(0,12), keyboard.slice(12,23), keyboard.slice(23,33)];
let wordHello=`${massiv[1][5]} ${massiv[0][2]} ${massiv[1][8]} ${massiv[1][8]} ${massiv[0][8]}`;
let wordJavaScript=`${massiv[1][6]} ${massiv[1][0]} ${massiv[2][3]} ${massiv[1][0]} ${massiv[1][1]} ${massiv[2][2]} ${massiv[0][3]} ${massiv[0][7]} ${massiv[0][9]} ${massiv[0][4]}`;
let wordTrainer=`${massiv[0][4]} ${massiv[0][3]} ${massiv[1][0]} ${massiv[0][7]} ${massiv[2][5]} ${massiv[0][2]} ${massiv[0][3]}`;
console.log(wordHello);
console.log(wordJavaScript);
console.log(wordTrainer)
