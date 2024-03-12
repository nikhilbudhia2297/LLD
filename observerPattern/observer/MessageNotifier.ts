import {NotificationObserverInterface} from "./NotificationObserverInterface";
import {Product} from "../products/Product";

export class MessageNotifier implements NotificationObserverInterface{
    private phone : string

    constructor(phone : string) {
        this.phone = phone;
    }


    update(product : Product): void {
        console.log(`Message sent to ${this.phone} for ${product.getName()}`);
    }

    getIdentifier(): string {
        return this.phone;
    }

}