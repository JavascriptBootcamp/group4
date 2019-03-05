<p>create a module (using <b>module pattern</b>) named <code>Storage</code> which contains a parameter named <code>storageType</code>. The parameter can be assigned as "localStorage" or "sessionStorage".</p>
<p>add methods to the constructor:
<ol>
<li>getItem</li>
<li>setItem</li>
<li>removeItem</li>
<li>clear</li>
</ol>
<p>each method should execute the corresponding action (get, set, remove, clear) according its <code>storageType</code></p>
<p>for example:
<code>
<pre>
var lStorage = new Storage("localStorage");
lStorage.setItem("someKey1", "someValue1");
console.log(lStorage.getItem("someKey1")); // should print "someValue1"
<br>
var sStorage = new Storage("sessionStorage");
sStorage.setItem("someKey2", "someValue2");
console.log(sStorage.getItem("someKey2")); // should print "someValue2"
</pre>
</code>
</p>