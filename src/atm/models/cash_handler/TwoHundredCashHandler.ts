import {CashHandler} from "./CashHandler";
import {ATM} from "../../ATM";
import {CashType} from "../cash/CashType";

export class TwoHundredCashHandler extends CashHandler{
    constructor(next : CashHandler) {
        super(next);
    }

    dispenseCash(atm : ATM, amount: number) {
        let count = Math.floor(amount/200);
        let remAmt = amount;
        if(count > atm.getInventory().getInventoryCount(CashType.TWO_HUN)) {
            count = atm.getInventory().getInventoryCount(CashType.TWO_HUN);
        }

        console.log(`COLLECT CASH : 200 : count : ${count}`);
        remAmt -= count*200;
        atm.getInventory().reduceInventory(CashType.TWO_HUN, count);

        if(remAmt!=0){
            super.dispenseCash(atm, remAmt);
        }
    }
}