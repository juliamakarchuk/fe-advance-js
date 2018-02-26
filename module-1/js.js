
//TASK 1
const firstRow="qwertyuiop[]";
const secondRow="asdfghjkl;'";
const thirdRow="zxcvbnm,./";
//TASK 2
const firstLength=firstRow.length;
const secondLength=secondRow.length;
const thirdLength=thirdRow.length;
//TASK 3
const firstLetter1=firstRow.charAt(0);
const lastLetter1=firstRow.charAt(11);
const firstLetter2=secondRow.charAt(0);
const lastLetter2=secondRow.charAt(10);
const firstLetter3=thirdRow.charAt(0);
const lastLetter3=thirdRow.charAt(9);
//TASK 4
const firstSearch=firstRow.indexOf('[');
const secondSearch=firstRow.indexOf(']');
//TASK 5
const message=`
${firstRow}
${secondRow} 
${thirdRow}
${firstLength}
${secondLength}
${thirdLength}
${firstLetter1}
${lastLetter1}
${firstLetter2}
${lastLetter2}
${firstLetter3}
${lastLetter3}
${firstSearch}
${secondSearch}`;
 console.log(message);

