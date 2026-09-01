let account = {
    name: "bhuvi",
    accountNumber: 123456789,
    balance: 5000
}
depositAmount = function(amount){
    account.balance += amount;
    displayBalance();
}
withdrawAmount = function(amount){
    if(amount<= account.balance){
        account.balance -= amount;
    }else if(amount>account.balance){
        alert("Insufficient balance");
    }
        displayBalance();
    }
    

displayBalance = function(){
    document.getElementById("output").innerHTML = "Account Holder: " + account.name + "<br>" + 
    "Account Number: " + account.accountNumber + "<br>" +
    "Balance: " + account.balance;
}


withdrawAmount(6000);