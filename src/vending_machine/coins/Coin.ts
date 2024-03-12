export abstract class Coin{
    private value : number

    protected constructor(value : number) {
        this.value = value;
    }

    getValue(){
        return this.value;
    }
}