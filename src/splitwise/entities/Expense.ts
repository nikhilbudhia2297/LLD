import {User} from "./User";
import {SplitType} from "./SplitType";
import {Split} from "./Split";

export class Expense{
    static expenseIdCounter : number = 1;
    id : number;
    desc : string;
    amount : number;
    addedBy : User;
    splitType : SplitType;
    splits : Split[];

    constructor(desc : string, amount : number, addedBy : User, splitType : SplitType, splits : Split[]) {
        this.id = Expense.expenseIdCounter;
        Expense.expenseIdCounter ++;
        this.desc = desc;
        this.amount = amount;
        this.addedBy = addedBy;
        this.splitType = splitType;
        this.splits = splits;
    }
}