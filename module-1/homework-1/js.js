
//TASK 1
const firstRow="qwertyuiop[]";
const secondRow="asdfghjkl;'";
const thirdRow="zxcvbnm,./";
//TASK 2
const firstRowLength=firstRow.length;
const secondRowLength=secondRow.length;
const thirdRowLength=thirdRow.length;
//TASK 3
const firstLetterFirstRow=firstRow.charAt(0);
const lastLetterFirstRow=firstRow.charAt(firstRowLength-1);
const firstLetterSecondRow=secondRow.charAt(0);
const lastLetterSecondRow=secondRow.charAt(secondRowLength-1);
const firstLetterThirdRow=thirdRow.charAt(0);
const lastLetterThirdRow=thirdRow.charAt(thirdRowLength-1);

//TASK 4
const firstSearch=firstRow.indexOf('[');
const secondSearch=firstRow.indexOf(']');
//TASK 5
const message=`
${firstRow}
${secondRow} 
${thirdRow}
${firstRowLength}
${secondRowLength}
${thirdRowLength}
${firstLetterFirstRow}
${lastLetterFirstRow}
${firstLetterSecondRow}
${lastLetterSecondRow}
${firstLetterThirdRow}
${lastLetterThirdRow}
${firstSearch}
${secondSearch}`;
 console.log(message);
