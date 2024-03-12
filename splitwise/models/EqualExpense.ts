import {Expense} from "./Expense";
import {EqualSplit} from "./EqualSplit";

export class EqualExpense extends Expense{
    validate(): boolean {
        const splits = this.getSplits()
        for(let split of splits){
            if(!(split instanceof EqualSplit)){
                return false;
            }
        }
        return true;
    }
}