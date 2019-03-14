<p>use <code>group4/Modules/01 JavaScript Programming/Assignments/28</code>.</p>
<p>convert <code>BankAccount</code> (and all its properties and methods) to an ES6 Class.</p>
<p>create a parent ES6 class named <code>Account</code> and move the properties: <code>number</code> and <code>owner</code> and the methods: <code>getBalance()</code> from <code>BankAccount</code> to it.</p>
<p>make <code>BankAccount</code> derive from <code>Account</code>.</p>
<p>create an additional ES6 class named <code>CreditCardAccount</code> which also derives from <code>Account</code></p>
<p>use <code>group4/Modules/01 JavaScript Programming/Assignments/19</code> in order to add credit card validation to <code>CreditCardAccount</code></p>
<p>create one instance of <code>BankAccount</code> and one instance of <code>CreditCardAccount</code>. deposit and withdraw from each. for example:
<code>
<pre>
const bankOfAmericaAccount = new BankAccount(123456789, "John Doe");
bankOfAmericaAccount.deposit(5000);
bankOfAmericaAccount.withdraw(2000);

const visaAccount = new CreditCardAccount(4580123412341234, "John Doe");
visaAccount.deposit(10000);
visaAccount.withdraw(3000);

console.log(bankOfAmericaAccount.getBalance()); // 3000
console.log(visaAccount.getBalance()); // 7000
</pre>
</code>
</p>
