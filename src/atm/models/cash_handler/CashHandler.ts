import {ATM} from "../../ATM";

export abstract class CashHandler{
    nextHandler : CashHandler |null;

    protected constructor(next : CashHandler |null) {
        this.nextHandler = next;
    }

    dispenseCash(atm : ATM, amount : number){
        if(this.nextHandler){
            this.nextHandler.dispenseCash(atm, amount);
        }
    }
}