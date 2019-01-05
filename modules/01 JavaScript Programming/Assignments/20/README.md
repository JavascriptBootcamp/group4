write a function named "myFilter" which filters an array using a callback function.
<h4>For Example</h4>
<code>
<pre>
var arr = [1, 2, 5, 7];
var filtered = myFilter(arr, function(item){
     return item % 2 === 0;
});
console.log(filtered);
</pre>
</code>
<h5>should return:</h5>
<code>
[ 2 ]
</code>
