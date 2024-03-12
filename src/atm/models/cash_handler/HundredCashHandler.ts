import {CashHandler} from "./CashHandler";
import {ATM} from "../../ATM";
import {CashType} from "../cash/CashType";

export class HundredCashHandler extends CashHandler{

    constructor(next : CashHandler | null) {
        super(next);
    }

    dispenseCash(atm : ATM, amount: number) {
        let count = Math.floor(amount/100);
        let remAmt = amount;
        if(count > atm.getInventory().getInventoryCount(CashType.HUN)) {
            count = atm.getInventory().getInventoryCount(CashType.HUN);
        }

        console.log(`COLLECT CASH : 100 : count : ${count}`);
        remAmt -= count*100;
        atm.getInventory().reduceInventory(CashType.HUN, count);

        if(remAmt!=0){
            super.dispenseCash(atm, remAmt);
        }
    }
}