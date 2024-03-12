import {User} from "./User";

export abstract class Split{
    private readonly user : User
    amount : number

    protected constructor(user : User) {
        this.user = user;
    }

    getUser(){
        return this.user;
    }

    getAmount(){
        return this.amount
    }

    setAmount(amount : number){
        this.amount = amount;
    }
}