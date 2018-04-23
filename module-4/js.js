const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
function addKeyboardLayout(alphabet){
	const arr=alphabet.split("");
    const keyboard = [arr.slice(0, arr.indexOf("a")), arr.slice(arr.indexOf("a"), arr.indexOf("z")), arr.slice(arr.indexOf("z"))];
	return keyboard;
}
console.log(addKeyboardLayout(alphabet));

const abc=addKeyboardLayout(alphabet);
 function getRandCharInRow(row){
    const randLetterLayout=abc[row-1][Math.floor(Math.random()*(abc[row-1].length))];
    return randLetterLayout;
 }
console.log(`случайное число первой строки:   ${getRandCharInRow(1)}`);
 function getRandCharInAlph(){
    const randRow = Math.floor(Math.random()*abc.length);
    const randLetter=abc[randRow][Math.floor(Math.random()*abc[randRow].length)];
    return randLetter;
 }
console.log(`случайное число:   ${getRandCharInAlph()}`);
