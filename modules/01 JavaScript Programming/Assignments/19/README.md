<p>You're starting your own credit card business. You need to come up with a new way to validate credit
cards with a
simple function called <code>validateCreditCard</code> that returns <code>true</code> or
<code>false</code>.
</p>

<p>Here are the rules for a valid number:
</p><ul>
<li>Number must be 16 digits, all of them must be numbers</li>
<li>You must have at least two different digits represented (all of the digits cannot be the same)</li>
<li>The final digit must be even</li>
<li>The sum of all the digits must be greater than 16</li>
</ul>
<p></p>

<p>The following credit card numbers are valid:</p>
<ul>
<li><code>9999777788880000</code></li>
<li><code>6666666666661666</code></li>
</ul>

<p>The following credit card numbers are invalid:
</p><ul>
<li><code>a92332119c011112</code> <em>invalid characters</em></li>
<li><code>4444444444444444</code> <em>only one type of number</em></li>
<li><code>1111111111111110</code> <em>sum less than 16</em></li>
<li><code>6666666666666661</code> <em>odd final number</em></li>
</ul>
<p></p>
</section>
<hr>
<section>
<p>
<strong>Bonus #1:</strong> A valid credit card number may also contain dashes, to make a card number
easier to read. For example, the following credit card numbers are now also valid:
</p><ul>
<li><code>9999-7777-8888-0000</code></li>
<li><code>6666-6666-6666-1666</code></li>
</ul>
Update your program to allow such numbers.
(Hint: Remove the dashes from the input string before checking if the input credit card number is
valid.)
<p></p>
</section>
<hr>
<section>
<p>
<strong>Bonus #2:</strong> Return an object indicating whether the credit card is valid, and if not,
what
the error
is
<br>
<code>{ valid: true, number: 'a923-3211-9c01-1112' }</code>
<br>
<code>{ valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }</code>
</p>
</section>
