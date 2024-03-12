import {NotificationObserverInterface} from "../observer/NotificationObserverInterface";
import {Product} from "../products/Product";

export interface StockObservableInterface {

    add(observer : NotificationObserverInterface) : void;

    remove(observer : NotificationObserverInterface) : void;

    notify(product : Product) : void;
}