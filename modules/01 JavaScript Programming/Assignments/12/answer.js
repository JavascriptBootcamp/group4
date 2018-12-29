function evenWords(str) {
  var arrStr = str.split(' ');
  var toPrintArr = arrStr.filter((value, index) => {
        return index % 2 !== 0;
  });
  return toPrintArr;
}

console.log(evenWords('aaa bbbb asda 1331 ewe'));
