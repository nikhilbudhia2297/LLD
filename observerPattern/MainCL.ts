import {Product} from "./products/Product";
import {EmailNotifier} from "./observer/EmailNotifier";
import {NotificationObserverInterface} from "./observer/NotificationObserverInterface";
import {MessageNotifier} from "./observer/MessageNotifier";

export class MainCL{

    static main(){
        let p1 = new Product("MAC");
        let p2 = new Product("iPHONE");

        let email1 : NotificationObserverInterface = new EmailNotifier("nikhil@gmail.com");
        let email2 : NotificationObserverInterface = new EmailNotifier("test@gmail.com");
        let phone1 : NotificationObserverInterface = new MessageNotifier("123");
        let phone2 : NotificationObserverInterface = new MessageNotifier("456");
        p1.observable.add(email1);
        p1.observable.add(phone2);

        p2.observable.add(phone1);
        p2.observable.add(email2);

        p1.addStock(10);
        p2.addStock(10);
    }

}

MainCL.main();