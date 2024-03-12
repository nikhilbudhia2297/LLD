import {Split} from "./Split";
import {User} from "./User";

export class ExactSplit extends Split{
    constructor(user : User, amount : number) {
        super(user);
        this.amount = amount;
    }

    getUser(): User {
        return super.getUser();
    }

    getAmount(): number {
        return super.getAmount();
    }
}