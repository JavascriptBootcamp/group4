var x, y;
x=5;
y=5;
x = ++x;
x = ++x;
y = y++;// assign to y the previous value so it remains 5
y = y++;
console.log(x, y);// x = 7, y = 5
