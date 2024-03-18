import {IExpenseValidator} from "./IExpenseValidator";
import {Split} from "../Split";

export abstract class ExpenseSplitTypeValidator implements IExpenseValidator{
    validate(splits: Split[], amount : number): boolean {
        let currAmount = 0;
        for(let split of splits){
            currAmount += split.getSplitAmount();
        }
        return currAmount == amount;
    }

}