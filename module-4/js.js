const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
function addKeyboardLayout(alphabet){
	const arr=alphabet.split("");
    const keyboard = [arr.slice(0, arr.indexOf("a")), arr.slice(arr.indexOf("a"), arr.indexOf("z")), arr.slice(arr.indexOf("z"))];
	return keyboard;
}
console.log(addKeyboardLayout(alphabet));

const alpha=addKeyboardLayout(alphabet);
 function getRandCharInRow(row){
    let randLetterLayout=alpha[row-1][Math.floor(Math.random()*(alpha[row-1].length))];
    return randLetterLayout;
 }
console.log(`случайное число первой строки:   ${getRandCharInRow(1)}`);
 function getRandCharInAlph(){
    let randRow = Math.floor(Math.random()*alpha.length);
    let randLetter=alpha[randRow][Math.floor(Math.random()*alpha[randRow].length)];
    return randLetter;
 }
console.log(`случайное число:   ${getRandCharInAlph()}`);
