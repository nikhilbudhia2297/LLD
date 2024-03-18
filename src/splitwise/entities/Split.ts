import {User} from "./User";

export class Split{
    private user : User;
    private amount : number;

    constructor(user : User, amount : number) {
        this.user = user;
        this.amount = amount;
    }

    getSplitAmount(){
        return this.amount;
    }

    getUser(){
        return this.user;
    }
}