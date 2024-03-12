import {CashTray} from "./CashTray";
import {CashType} from "./cash/CashType";

export class CashInventory{
    inventory : CashTray[];
    totalAmount : number;

    constructor() {
        this.inventory = [];
        this.totalAmount = 0;
        this.setUpInventory();
    }

    setUpInventory(){
        this.inventory.push(new CashTray(CashType.HUN, 10));
        this.totalAmount += 100*10;
        this.inventory.push(new CashTray(CashType.TWO_HUN, 10));
        this.totalAmount += 200*10;
        this.inventory.push(new CashTray(CashType.FIVE_HUN, 10));
        this.totalAmount += 500*10;
    }

    hasTotalAmount(amount : number){
        return this.totalAmount > amount;
    }

    getInventoryCount(cashType : CashType){
        for(let inv of this.inventory){
            if(inv.type == cashType){
                return inv.count;
            }
        }
        return 0;
    }

    reduceInventory(cashType : CashType, count : number){
        for(let inv of this.inventory){
            if(inv.type == cashType){
                if(inv.count < count){
                    throw new Error('INSUFFICIENT BALANCE');
                }
                inv.count -= count;
                return;
            }
        }
    }




}