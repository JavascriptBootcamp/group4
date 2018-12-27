// 1
number = 1;

while (number < 50) {
	if (number % 7 === 0) console.log('The number is ' + number + ' => '+ 'boom');
	number++;
}


// 2
number = 1;

while (number < 100) {
	if (number % 3 === 0 && number % 5 === 0) console.log('The number is ' + number + ' => ' + 'fizzbuzz');
	else if (number % 3 === 0) console.log('The number is ' + number + ' => ' + 'fizz');
	else if (number % 5 === 0) console.log('The number is ' + number + ' => ' + 'buzz');
	
	number++;
}
