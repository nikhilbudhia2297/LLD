import {UserController} from "./controllers/UserController";
import {User} from "./entities/User";
import {ExpenseController} from "./controllers/ExpenseController";
import {Expense} from "./entities/Expense";

export class SplitWiseApp {
    private userController : UserController;
    private expenseController : ExpenseController;

    constructor() {
        this.userController = new UserController();
        this.expenseController = new ExpenseController();
    }

    addUser(user : User){
        this.userController.addUser(user);
    }

    addExpense(expense : Expense){
        this.expenseController.addExpense(expense);
    }

}