import {SplitWiseApp} from "./SplitWiseApp";
import {User} from "./entities/User";
import {Expense} from "./entities/Expense";
import {SplitType} from "./entities/SplitType";
import {Split} from "./entities/Split";

function splitwiseMain(){
    const app = new SplitWiseApp();

    const user1 = new User('1', 'Nikhil');
    const user2 = new User('2', 'Test');

    app.addUser(user1);
    app.addUser(user2);

    const expense = new Expense(
        'Food',
        200,
        user1,
        SplitType.EQUAL,
        [
            new Split(user1, 100),
            new Split(user2, 100)
        ]
    );

    app.addExpense(expense);

}

splitwiseMain();