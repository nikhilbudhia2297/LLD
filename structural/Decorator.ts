abstract class ItemAbsClass {
    private readonly description : string

    protected constructor(desc : string) {
        this.description = desc
    }

    getDescription(){
        return this.description;
    }

    abstract getCost() : number;
}


class Item extends ItemAbsClass{

    constructor() {
        super("Cheese Burst");
    }

    getCost(): number {
        return 200;
    }
}

abstract class DecoratorAbsClass extends ItemAbsClass{
    item : ItemAbsClass

    protected constructor(decoratorName : string, item : ItemAbsClass) {
        super(decoratorName);
        this.item = item;
    }

    abstract getDescription(): string
}

class Decorator1 extends DecoratorAbsClass{

    constructor(item : ItemAbsClass) {
        super("Olives", item);
    }

    getDescription(): string {
        return this.item.getDescription();
    }

    getCost(): number {
        return this.item.getCost() + 20;
    }
}

class Decorator2 extends DecoratorAbsClass{
    constructor(item : ItemAbsClass) {
        super("Extra Cheese", item);
    }

    getDescription(): string {
        return this.item.getDescription()+" Extra Cheese";
    }

    getCost(): number {
        return this.item.getCost() + 50;
    }
}

function decoratorTest(){
    let item = new Item();
    console.log(item.getDescription(), " cost : ", item.getCost());

    item = new Decorator1(item);
    console.log(item.getDescription(), " cost : ", item.getCost());

    item = new Decorator2(item);
    console.log(item.getDescription(), " cost : ", item.getCost());

    item = new Decorator1(item);
    console.log(item.getDescription(), " cost : ", item.getCost());
}

decoratorTest();