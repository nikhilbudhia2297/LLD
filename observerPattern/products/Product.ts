import {StockObservableInterface} from "../observable/StockObservableInterface";
import {StockObservable} from "../observable/StockObservable";

export class Product {
    private name : string
    stockCount : number;
    observable : StockObservableInterface;

    constructor(name : string) {
        this.name = name;
        this.stockCount = 0;
        this.observable = new StockObservable()
    }

    addStock(s : number) {
        if(this.stockCount == 0){
            this.observable.notify(this);
        }
        this.stockCount +=s;
    }

    getName(){
        return this.name;
    }
}