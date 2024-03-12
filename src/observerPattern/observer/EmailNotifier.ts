import {NotificationObserverInterface} from "./NotificationObserverInterface";
import {Product} from "../products/Product";

export class EmailNotifier implements NotificationObserverInterface{
    private email : string

    constructor(email : string) {
        this.email = email;
    }

    update(product : Product): void {
        console.log(`Email sent to ${this.email} for ${product.getName()}`);
    }

    getIdentifier(): string {
        return this.email;
    }

}