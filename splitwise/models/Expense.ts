import {ExpenseType} from "../constants/ExpenseType";
import {User} from "./User";
import {Split} from "./Split";

export abstract class Expense{
    private id : string
    private type : ExpenseType
    private addedBy : User
    private amount : number
    private splits : Split[]

    constructor(id : string, type : ExpenseType, addedBy : User, amount : number, splitAmong : Split[]) {
        this.id = id;
        this.type = type;
        this.addedBy = addedBy;
        this.amount = amount;
        this.splits = splitAmong;
    }

    getId(){
        return this.id;
    }

    getType(){
        return this.type;
    }

    getAddedBy(){
        return this.addedBy;
    }

    getAmount(){
        return this.amount;
    }

    getSplits(){
        return this.splits;
    }

    abstract validate() : boolean;
}