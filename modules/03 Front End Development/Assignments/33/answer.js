lettersObj = {
  a: 'A',
  b: 'B',
  c: 'C',
  d: 'D',
  e: 'E',
  f: 'F',
  g: 'G',
  h: 'H',
  i: 'I',
  j: 'J',
  k: 'K',
  l: 'L',
  m: 'M',
  n: 'N',
  o: 'O',
  p: 'P',
  q: 'Q',
  r: 'R',
  s: 'S',
  t: 'T',
  u: 'U',
  v: 'V',
  w: 'W',
  x: 'X',
  y: 'Y',
  z: 'Z'
};

var inputIndex = 0;
var inputVal = '';

var inputElem = document.getElementById('letters_input');
inputElem.addEventListener('keyup', convertToUpperCase);


function convertToUpperCase() {
  var currentChar = inputElem.value[inputIndex];
  var upperCaseChar;
  var inputIsLowerCaseLetter = false;

  for(var lettersObjKey in lettersObj) {
    if(currentChar === lettersObjKey) {
      inputIsLowerCaseLetter = true;
      upperCaseChar = lettersObj[lettersObjKey];
      inputVal += upperCaseChar;
      inputElem.value = inputVal;
      inputIndex++;  
    } 
  }

  if(!inputIsLowerCaseLetter) {
    inputVal += currentChar;
    inputElem.value = inputVal;
    inputIndex++;
  }
}

