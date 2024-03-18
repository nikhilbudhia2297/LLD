import {User} from "./User";
import {Balance} from "./Balance";

export class BalanceSheet{
    totalExpense : number = 0;
    totalOwe : number = 0;
    totalAmountPaid : number = 0;
    userBalanceMap : Map<User, Balance> = new Map<User, Balance>();

    constructor() {
    }

    addUserBalance(user : User, balance : Balance){
        const userCurrentBalance  = this.userBalanceMap.get(user);
        if(!userCurrentBalance){
            this.userBalanceMap.set(user, balance);
            return;
        }

    }
}