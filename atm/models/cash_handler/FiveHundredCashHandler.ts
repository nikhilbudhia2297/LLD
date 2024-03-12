import {CashHandler} from "./CashHandler";
import {ATM} from "../../ATM";
import {CashType} from "../cash/CashType";

export class FiveHundredCashHandler extends CashHandler{
    constructor(next : CashHandler) {
        super(next);
    }

    dispenseCash(atm : ATM, amount: number) {
        let count = Math.floor(amount/500);
        let remAmt = amount;
        if(count > atm.getInventory().getInventoryCount(CashType.FIVE_HUN)) {
            count = atm.getInventory().getInventoryCount(CashType.FIVE_HUN);
        }

        console.log(`COLLECT CASH : 500 : count : ${count}`);
        remAmt -= count*500;
        atm.getInventory().reduceInventory(CashType.FIVE_HUN, count);

        if(remAmt!=0){
            super.dispenseCash(atm, remAmt);
        }
    }
}