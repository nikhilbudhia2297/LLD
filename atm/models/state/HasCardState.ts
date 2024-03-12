import {StateActions} from "./StateActions";
import {ATM} from "../../ATM";
import {AtmActionType} from "../AtmActionType";
import { Card } from "../Card";
import {AuthorisingState} from "./AuthorisingState";

export class HasCardState implements StateActions{
    atm: ATM;

    constructor(atm : ATM) {
        this.atm = atm;
        console.log('DO NOT REMOVE YOUR CARD. ENTER PIN ');
    }

    authoriseCard(pin: string): void {
        throw new Error("INVALID INPUT");
    }

    withdrawCash(): void {
        throw new Error('INVALID INPUT');
    }

    enterPin(pin: string): void {
        console.log('AUTHORISING....')
        this.atm.setState(new AuthorisingState(this.atm));
        this.atm.getState().authoriseCard(pin)
    }

    insertCard(card: Card): void {
        throw new Error('INVALID INPUT');
    }

    processRequest(): void {
        throw new Error('INVALID INPUT');
    }

    selectAction(actionType: AtmActionType): void {
        throw new Error('INVALID INPUT');
    }

}