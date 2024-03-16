export class Bill{
    private readonly amount : number

    constructor(amount : number) {
        this.amount = amount
    }

    getAmount(){
        return this.amount;
    }
}