import {Expense} from "./Expense";
import {PercentSplit} from "./PercentSplit";

export class PercentExpense extends Expense{
    validate(): boolean {
        const splits = this.getSplits();
        for(let split of splits){
            if(!(split instanceof PercentSplit)){
                return false;
            }
        }

        let totalPercent = 100;
        for(let split  of splits){
            let currSplit : PercentSplit = split as PercentSplit;
            totalPercent = totalPercent - currSplit.getPercent();
        }
        if(totalPercent != 0){
            return false;
        }
        return true;
    }
}