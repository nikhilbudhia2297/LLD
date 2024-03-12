import {Product} from "../products/Product";

export interface NotificationObserverInterface {
    update(product : Product) : void;

    getIdentifier() : string;
}