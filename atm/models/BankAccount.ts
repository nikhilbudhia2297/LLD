import { Card } from "./Card";

export class BankAccount{
    private accNumber : string
    private card : Card;
    private balance : number;

    constructor(acc : string) {
        this.accNumber = acc;
        this.balance = 0;
    }

    getBalance(){
        return this.balance;
    }

    setCard(card : Card){
        this.card = card;
    }

    addAmount(amount : number){
        this.balance += amount;
    }

    hasAmount(amt : number){
        return this.balance >= amt;
    }

    decreaseAmount(amt : number){
        if(this.balance < amt){
            throw new Error('INSUFFICIENT BALANCE');
        }
        this.balance -=amt;
    }
}