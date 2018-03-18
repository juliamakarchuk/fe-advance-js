const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
function addKeyboardLayout(alphabet){
	const keyboard=alphabet.split("");
    const array=[];
    const firstRow=[keyboard.slice(0, keyboard.indexOf('a'))];
    const secondRow=[keyboard.slice(keyboard.indexOf('a'),keyboard.indexOf('z'))];
    const thirdRow=[keyboard.slice(keyboard.indexOf('z'))];
    array.push(firstRow);
    array.push(secondRow);
    array.push(thirdRow);
	return Array.from(array);
}
console.log(addKeyboardLayout(alphabet));

var alpha=addKeyboardLayout(alphabet);
 function getRandCharInRow(row){
    var keyboardLayout = alpha[row - 1].join(' ');
    var randLetterLayout=keyboardLayout[Math.floor(Math.random()*(keyboardLayout.length))];
    return randLetterLayout;
 }
console.log(`случайное число первой строки:   ${getRandCharInRow(1)}`);
 function getRandCharInAlph(){
    var randLetter=alphabet.charAt(Math.floor(Math.random()*alphabet.length));
    return randLetter;
 }
console.log(`случайное число:   ${getRandCharInAlph()}`);
