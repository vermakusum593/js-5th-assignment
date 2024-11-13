const account = {
    accountName: "Kusum",
    balance:100,
    getBalance() {
        console.log(`Balance: $${this.balance}`);
    },
    deposit() {
        let deposit = parseFloat(prompt("The amount to be deposited"));
        if (deposit<=0|| isNaN(deposit)) {
            alert ("NOT A VALID AMOUNT");
        }
        const newBalance = (this.balance+=deposit);
        console.log(`New Balance: $${newBalance}`);
    },
    Withdrawal() {
        let withdrawal = parseFloat(prompt("Enter the amount to withdraw:"));
        if (withdrawal <= 0 || isNaN(withdrawal) || withdrawal > this.balance) {
            alert("NOT A VALID AMOUNT");
        } else {
            this.balance -= withdrawal;
            console.log(`Remaining Balance: $${this.balance}`);
        }
    },
    getAccountName() {
        console.log(this.accountName);
    },
};

function atm() {
    let running = true;
    while(running) {
        const message = parseInt(
            prompt(
                "select a choice 1.) see balance 2.) make a deposit 3.)make a withdrwal 4.)get account name 5.)exit"
            )
        );
        
        switch(message) {
            case 1:
                account.getBalance();
                break;
            case 2:
                account.deposit();
                break;
            case 3:
                account.Withdrawal();
                break;
            case 4:
                account.getAccountName();
                break;
            case 5:
                running = false;
                break;
            default:
                console.log("Please choose a valid option.");
          
        }
    }
}


window.onload = atm;