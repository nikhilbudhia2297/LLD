import {Expense} from "../entities/Expense";
import {ExpenseValidatorFactory} from "../entities/expense_validator/ExpenseValidatorFactory";
import {BalanceSheetController} from "./BalanceSheetController";

export class ExpenseController{
    private expenses : Expense[];
    private balanceSheetController : BalanceSheetController;

    constructor() {
        this.expenses = [];
        this.balanceSheetController = new BalanceSheetController();
    }

    addExpense(expense : Expense){
        const expenseValidator = ExpenseValidatorFactory.getExpenseValidator(expense.splitType);
        const isValidExpense = expenseValidator.validate(expense.splits, expense.amount);
        if(!isValidExpense){
            throw new Error(`Invalid Expense`);
        }
        this.expenses.push(expense);
        this.balanceSheetController.updateUserBalanceSheet(expense);
    }

    getAllExpenses(){
        return this.expenses;
    }
}