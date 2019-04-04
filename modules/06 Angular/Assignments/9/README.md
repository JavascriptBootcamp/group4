<p>
create an Angular pipe which accepts a string. The pipe should capitalize the first letter of each word in the string then return the capitalized string.
</p>
<h4>examples:</h4>
<ul>
<li>
  Input: 
<code>
{{ 'a short sentence' | capitalize }}
</code>
</li>
<li>
  Output: 
<code>
A Short Sentence  
</code>
</li>
  </ul>
    <ul>
<li>
    Input: 
<code>
{{ 'a lazy fox' | capitalize }}
</code>
</li>
  <li>
  Output: 
<code>
A Lazy Fox
</code>
</li>
  </ul>
  <ul>
<li>
    Input: 
<code>
{{ 'look, it is working!' | capitalize }}
</code>
</li>
  <li>
  Output: 
<code>
Look, It Is Working!
</code>
</li>

</ul>
<p>
create an array of strings, loop through them using <code>*ngFor</code> and execute the pipe on them
</p>
