function evenWords(str) {
  var substrArr = str.split(' '); // An array of each substring (a string which has a space between it and the other substrings in str)
  var substrPositionNum = 1;
  var output = '';

  substrArr.forEach(subStr => {
  	if (substrPositionNum % 2 === 0) output += subStr + ' ';
  	substrPositionNum++;

	
  });
  //console.log(output);
  return output;

}
