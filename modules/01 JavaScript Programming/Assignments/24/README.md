Write a JavaScript constructor function named <code>RandomWord</code> that accepts an array of strings <code>chars</code> as a parameter.<br>
The function contains:<br>
<ol>
<li><code>randomize</code> - a function which accepts a number <code>length</code> as a parameter and generates a string.<br> The string contains only the specified <code>chars</code> with the length of <code>length</code> parameter value.
</li>
</ol>
Examples:
<ol>
<li>
<code>
var word = new RandomWord(['a','b','c']);<br><br>
var result = word.randomize(3);<br><br>
console.log(result);
</code>
<p>Will print:</p>
<code>
bca
</code>
</li>
<li>
<code>
var word = new RandomWord(['a','b','g','u']);<br><br>
var result = word.randomize(6);<br><br>
console.log(result);<br><br>
result = word.randomize(2);<br><br>
console.log(result);
</code>
<p>Will print:</p>
<code>
guubbb<br><br>
bg
</code>
</li>
</ol>
<h4>Validation:</h4>
<p>if <code>chars</code> is not an array, return the error: <code>"chars" should be an array</code>.</p>
<p>if <code>chars</code> array doesn't contain only strings, return the error: <code>"chars" should include only strings</code>.</p>
<p>if <code>length</code> is not a number, return the error: <code>"length" should be a number</code>.</p>
