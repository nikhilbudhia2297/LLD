import {StateActions} from "./StateActions";
import {ATM} from "../../ATM";
import {AtmActionType} from "../AtmActionType";
import { Card } from "../Card";
import {AuthorisedState} from "./AuthorisedState";

export class AuthorisingState implements StateActions{
    atm: ATM;

    constructor(atm : ATM) {
        console.log('AUTHORISING PIN');
        this.atm = atm;
    }

    withdrawCash(): void {
        throw new Error('INVALID INPUT');
    }

    enterPin(pin: string): void {
        throw new Error('INVALID INPUT');
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

    authoriseCard(pin: string): void {
        if(this.atm.getCard().isValidPin(pin)){
            console.log('AUTHORISED');
            this.atm.setState(new AuthorisedState(this.atm));
            return;
        }
        console.log('WRONG PIN');
        throw new Error('UNAUTHORISED');
    }

}