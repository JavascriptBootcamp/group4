<h1>Answers:</h1>
<pre>
1. a
2. c
3. a
4. d
5. b
6. d
7.1. a
7.2. c
7.3. b
8. b
9. a
10. 
<code>
function average(arr){
	var sum = 0;
	for (var i=0; i&lt;arr.length; i++){
		sum += arr[i];
    }
	return sum / arr.length;
}
</code>
Bonus.
<code>
function totalAdults(ages){
	var adultsArr = ages.filter(function(age) {
		return age > 18;
    });
	return adultsArr.length;
}
</code>
</pre>