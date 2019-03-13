namespace application {
    
	export class Application {
		// private bankOfAmericaAccount: BankAccount;
		// private visaAccount: CreditCardAccount;

		constructor() {
			const bankOfAmericaAccount = new BankAccount(123456789, "John Doe");
			bankOfAmericaAccount.deposit(5000);
			bankOfAmericaAccount.withdraw(2000);
			console.log(bankOfAmericaAccount.getBalance()); // 3000
			// console.log(bankOfAmericaAccount.getBankAccountNumber());
			// console.log(bankOfAmericaAccount.getBankAccountOwner());

			const visaAccount = new CreditCardAccount(4580123412341234, "John Doe");
			visaAccount.deposit(10000);
			visaAccount.withdraw(3000);
			console.log(visaAccount.getBalance()); // 7000
		}

	}
	
}
