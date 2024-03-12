import {CashType} from "./CashType";

export class Cash{
    cashType : CashType
    value : number

    constructor(cashType : CashType) {
        switch (cashType){
            case CashType.HUN: this.value = 100; break;
            case CashType.TWO_HUN: this.value = 200;  break;
            case CashType.FIVE_HUN: this.value = 500; break;
        }
    }
}