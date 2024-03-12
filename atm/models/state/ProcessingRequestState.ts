import {StateActions} from "./StateActions";
import {ATM} from "../../ATM";
import {AtmActionType} from "../AtmActionType";
import { Card } from "../Card";
import {IdleState} from "./IdleState";

export class ProcessingRequestState implements StateActions{
    atm: ATM;

    constructor(atm : ATM) {
        this.atm = atm;
    }

    authoriseCard(pin: string): void {
        throw new Error('INVALID INPUT');
    }

    withdrawCash(amount : number): void {
        if(!this.atm.getCard().getBank().hasAmount(amount)){
            console.log('INSUFFICIENT BALANCE');
            return;
        }
        this.atm.getCard().getBank().decreaseAmount(amount);
        this.atm.getCashHandler().dispenseCash(this.atm, amount);
        console.log('PLEASE COLLECT CASH');
    }

    enterPin(pin: string): void {
        throw new Error('INVALID INPUT');
    }

    insertCard(card: Card): void {
        throw new Error('INVALID INPUT');
    }

    processRequest(amount : number): void {
        this.withdrawCash(amount);
        this.atm.setState(new IdleState(this.atm));
    }

    selectAction(actionType: AtmActionType): void {
        throw new Error('INVALID INPUT');
    }

}