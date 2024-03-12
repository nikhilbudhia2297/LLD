import {ATM} from "./ATM";
import {Card} from "./models/Card";
import {BankAccount} from "./models/BankAccount";
import {AtmActionType} from "./models/AtmActionType";

function mainATM(){
    const atm = new ATM();
    const card = new Card('abcd', '1234');
    const bankAccount = new BankAccount('nikhil');
    bankAccount.addAmount(5000);
    bankAccount.setCard(card);
    card.setBank(bankAccount);

    atm.getState().insertCard(card);

    atm.getState().enterPin('1234');

    atm.getState().selectAction(AtmActionType.WITHDRAW);

    atm.getState().processRequest(1300);

}

mainATM();