import {Split} from "../Split";

export interface IExpenseValidator{
    validate(splits : Split[], amount : number) : boolean;
}