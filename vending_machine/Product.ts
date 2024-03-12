export class Product{
    private id : number
    private value : number

    constructor(id: number, val : number) {
        this.id = id;
        this.value = val;
    }

    getId(){
        return this.id;
    }

    getValue(){
        return this.value;
    }
}