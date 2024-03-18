import {SplitType} from "../SplitType";
import {IExpenseValidator} from "./IExpenseValidator";
import {EqualExpenseValidator} from "./EqualExpenseValidator";
import {ExactExpenseValidator} from "./ExactExpenseValidator";

export class ExpenseValidatorFactory{
    static getExpenseValidator(splitType : SplitType) : IExpenseValidator{
        switch (splitType){
            case SplitType.EQUAL:
                return new EqualExpenseValidator();
            case SplitType.EXACT :
                return new ExactExpenseValidator();
            default :
                throw new Error(`INVALID SPLIT TYPE`);
        }
    }
}