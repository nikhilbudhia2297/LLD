import {StockObservableInterface} from "./StockObservableInterface";
import {NotificationObserverInterface} from "../observer/NotificationObserverInterface";
import {Product} from "../products/Product";

export class StockObservable implements StockObservableInterface{
    observers : NotificationObserverInterface[];

    constructor() {
        this.observers = [];
    }

    add(observer : NotificationObserverInterface): void {
        this.observers.push(observer);
    }


    remove(observer : NotificationObserverInterface): void {
        for(let i=0; i<this.observers.length; i++){
            let obs = this.observers[i];
            if(obs.getIdentifier() == observer.getIdentifier()){
                this.observers.splice(i,1);
            }
        }
    }

    notify(product : Product): void {
        this.observers.forEach((obs) => obs.update(product));
    }

}