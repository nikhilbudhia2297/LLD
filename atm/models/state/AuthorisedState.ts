import {StateActions} from "./StateActions";
import {ATM} from "../../ATM";
import {AtmActionType} from "../AtmActionType";
import { Card } from "../Card";
import {ProcessingRequestState} from "./ProcessingRequestState";

export class AuthorisedState implements StateActions{
    atm: ATM;

    constructor(atm : ATM) {
        this.atm = atm;
    }

    authoriseCard(pin: string): void {
        throw new Error('INVALID INPUT');
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
        switch (actionType){
            case AtmActionType.CHECK_BALANCE:
                throw new Error('NOT IMPLEMENTED');
            case AtmActionType.WITHDRAW:
                console.log('ENTER AMOUNT ');
                this.atm.setState(new ProcessingRequestState(this.atm));
                break;
            default : throw new Error('INVALID ACTION');
        }
    }

}