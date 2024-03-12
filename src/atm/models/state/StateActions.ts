import {ATM} from "../../ATM";
import {AtmActionType} from "../AtmActionType";
import {Card} from "../Card";

export interface StateActions{
    atm : ATM;

    insertCard(card : Card) : void;

    enterPin(pin : string) : void;

    authoriseCard(pin : string) : void;

    selectAction(actionType : AtmActionType) : void;

    processRequest(amount : number) : void;

    withdrawCash(amount : number) : void;

}