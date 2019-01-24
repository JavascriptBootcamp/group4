
bank1 = {
    owner:"avi",
    address:"netvot 1",
    balance:1000
}

bank2 = {
    owner:"mnor",
    address:"netvot 2",
    balance:2000
}

function withdraw(amount){

    var newBalnce = this.balance - amount;
   return newBalnce;
}

console.log(withdraw.call(bank1,200));
console.log(withdraw.call(bank2,200));
