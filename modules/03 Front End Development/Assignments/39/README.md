<p>Use your answer from <code>Modules/01 JavaScript Programming/Assignments/18</code> to:</p>
<p>
Create a shopping cart table. The table contains the columns "Name", "Price" and "Action".
</p>
<p>
"Name" column should include a drop-down list with 10 different product names.
</p>
<p>
"Price" column should include a number input field.
</p>
<p>
"Action" column should include one of the following buttons:
<ol>
<li>If it's the first row (with the input fields) - "Add" which adds the product name and price to the table as a new row</li>
<li>If it's another row - "Remove" which removes the current row</li>
</ol>
</p>
<p>
With every product addition a <code>div</code> with the total price of the shopping cart should be displayed.
</p>
<p>Use your answer from <code>Modules/01 JavaScript Programming/Assignments/19</code> to:</p>
<p>
Create a payment form which includes:
<ul>
<li>"Card Number" field</li>
<li>"Name on card" field</li>
<li>"Expiry date" field (should allow choosing a date from a calendar)</li>
<li>"Security code" field (masked 3 digits)</li>
<li>"Submit" button</li>
</ul>
<p>
All fields should be required.
</p>
<p>
Submitting the form should validate the card number using <code>validateCreditCard</code> from Assignment 19.</p>
<p>If the number is valid - submit the form to the page "http://localhost:3000/Order" using the "post" action. If it's not valid - display the valiation result in a div.</p>
<p>
Reference: <a href="https://htmlreference.io/forms/" target="_blank">Forms in HTML5</a>
</p>