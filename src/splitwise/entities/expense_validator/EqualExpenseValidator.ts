import {ExpenseSplitTypeValidator} from "./ExpenseSplitTypeValidator";
import {Split} from "../Split";

export class EqualExpenseValidator extends ExpenseSplitTypeValidator{
    validate(splits: Split[], amount : number): boolean {
        return super.validate(splits, amount);
    }
}