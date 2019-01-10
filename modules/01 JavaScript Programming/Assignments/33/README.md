<p>check if a given linked is circular* or not.</p>
<p>* circular - when a node points to the one before it.</p>
<h3>Examples</h3>
<code>
<pre>
  const l = new List();<br>
  const a = new Node('red');<br>
  const b = new Node('yellow');<br>
  const c = new Node('green');<br>
  l.head = a;<br>
  a.next = b;<br>
  b.next = c;<br>
  c.next = b;<br>
  console.log(circular(l));
</pre>
</code>
<h3>Output</h3>
<code>true</code>