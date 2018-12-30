write a function named "myFilter" which filters an array using a callback function.
<h4>For Example</h4>
<code>
var arr = [1, 2, 5, 7];<br />
var filtered = myFilter(arr, function(item){<br />
     return item % 2 === 0;<br />
}); <br />
console.log(filtered);<br />
</code>
<h5>should return:</h5>
<code>
[ 2 ]
</code>
