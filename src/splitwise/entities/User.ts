import {BalanceSheet} from "./BalanceSheet";

export class User{
    private readonly id : string;
    private readonly name : string;
    private balanceSheet : BalanceSheet

    constructor(id : string, name : string) {
        this.id = id;
        this.name = name;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    printBalanceSheet(){

    }
}