import {BankAccount} from "./BankAccount";

export class Card{
    private cardNumber : string
    private pin : string
    private bankAccount : BankAccount;

    constructor(cardNo : string, pin : string) {
        this.cardNumber = cardNo;
        this.pin = pin;
    }

    isValidPin(pin : string){
        return this.pin == pin;
    }

    setBank(acc : BankAccount){
        this.bankAccount = acc;
    }

    getBank(){
        return this.bankAccount;
    }
}