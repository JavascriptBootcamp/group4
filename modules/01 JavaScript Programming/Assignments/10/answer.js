var num = 10;

do {
  if (num % 2 === 0) console.log(num + ' is even');
  else console.log(num + ' is odd');
  num++;
}
while (num <= 20);


// By for loop
for (var val = 10; val <= 20; val++) {
	if ( val% 2 === 0) console.log(val + ' is even');
    else console.log(val + ' is odd');
}
