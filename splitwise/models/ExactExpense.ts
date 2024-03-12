import {Expense} from "./Expense";
import {EqualSplit} from "./EqualSplit";

export class ExactExpense extends Expense{
    validate(): boolean {
        const splits = this.getSplits();
        for(let split of splits){
            if(!(split instanceof EqualSplit)){
                return false;
            }
        }

        let totalAmount = this.getAmount();
        for(let split of splits){
            totalAmount = totalAmount - split.getAmount();
        }
        if(totalAmount != 0){
            return false;
        }
        return true;
    }
}