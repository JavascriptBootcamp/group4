function isPalindrome(str) {
	var counter;

	if (str === '') {
    document.getElementById('resultMessage').innerText = 'Now your input is empty';
		return false;
	}

	if (str.length === 1) {
    document.getElementById('resultMessage').innerText = `${str} contains only one char, so is a palindrome`;
		return true;
	}

	// If the string passed as a parameter contains even number of chars
	if (str.length % 2 === 0) counter = (str.length) / 2; // counter is length of exactly half string

	// If the string passed as a parameter contains odd number of chars
	else counter = (str.length - 1) / 2; // Ignore a middle char in the string 

	// Loop through a half length of the string parameter to compare first to last char, second to one before a last char and so on        
	for (var i = 0; i < counter; i++) {
		if (str[i] === str.slice(-1-i)[0]) {
      document.getElementById('resultMessage').innerText = `${str} is a palindrome`;
			return true;
		}
    document.getElementById('resultMessage').innerText = `${str} is not a palindrome`;
		return false;
	}	
}
