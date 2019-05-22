function camelCase(str) {
  let charsArr = [];
  let finalStr = '';

  for(let i = 0; i < str.length; i++) {
    charsArr.push(str[i]);
  } 

  for(let i = 0; i < charsArr.length; i++) {
    if (charsArr[i] === '-' || charsArr[i] === '_') {
      charsArr.splice(i, 1);
      charsArr[i] = charsArr[i].toUpperCase();
      finalStr += charsArr[i];
    }
    else  finalStr += charsArr[i]; 
  }

  return finalStr;
}
//console.log(camelCase('david-lev_very-good'));