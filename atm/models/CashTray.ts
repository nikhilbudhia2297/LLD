import {CashType} from "./cash/CashType";

export class CashTray{
    type : CashType
    count : number

    constructor(type : CashType, count : number) {
        this.type = type;
        this.count = count;
    }
}