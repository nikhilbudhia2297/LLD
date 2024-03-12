import {StateActions} from "./StateActions";
import {ATM} from "../../ATM";
import {AtmActionType} from "../AtmActionType";
import {Card} from "../Card";
import {HasCardState} from "./HasCardState";

export class IdleState implements StateActions{
    atm: ATM;

    constructor(atm : ATM) {
        this.atm = atm;
        console.log('INSERT CARD');
    }
    withdrawCash(): void {
        throw new Error('INVALID INPUT');
    }

    enterPin(pin: string): void {
        throw new Error('INVALID INPUT');
    }

    insertCard(card: Card): void {
        this.atm.setCard(card);
        this.atm.setState(new HasCardState(this.atm));
    }

    processRequest(): void {
        throw new Error('INVALID INPUT');
    }

    selectAction(actionType: AtmActionType): void {
        throw new Error('INVALID INPUT');
    }

    authoriseCard(pin: string): void {
        throw new Error('INVALID INPUT');
    }

}