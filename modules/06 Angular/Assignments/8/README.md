<p>
create an Angular pipe which returns whether two strings are anagrams* of each other.
</p>
<h4>examples of anagram:</h4>
<ul>
<li>
<code>
'rail safety' and 'fairy tales' are anagrams
</code>
</li>
<li>
<code>
'RAIL! SAFETY!' and 'fairy tales' are anagrams
</code>
</li>
</ul>
<p>
separate two strings with a question mark and display a boolean indicating if the strings from left and right to the question mark are anagrams
</p>
<h4>examples of Angular code:</h4>
<ul>
<li>
  Input: 
<code>
{{ 'rail safety?fairy tales' | areanagrams }}
</code>
</li>
<li>
  Output: 
<code>
"rail safety" and "fairy tales" true
</code>
</li>
  </ul>
  <ul>
  <li>
  Input: 
<code>
{{ '123rail safety?fairy tales' | areanagrams }}
</code>
</li>
<li>
  Output: 
<code>
"123rail safety" and "fairy tales" false
</code>
</li>
</ul>
<p>
* if a string uses the same characters as anohter then this string is an anagram
</p>
