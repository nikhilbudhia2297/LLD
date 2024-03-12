import {ProductShelf} from "./ProductShelf";
import {Product} from "./Product";

export class Inventory{
    shelves : ProductShelf[];

    constructor() {
        this.initialiseInventory();
    }

    initialiseInventory(){
        this.shelves  = [];
        let productArray = [
            {id : 1, val : 10, count : 10},
            {id : 2, val : 20, count : 10},
            {id : 3, val : 30, count : 10},
            {id : 4, val : 50, count : 10}
        ];

        for(let product of productArray){
            let p = new Product(product.id, product.val);
            this.shelves.push(new ProductShelf(p, product.count));
        }

        console.log(`INVENTORY CREATED of : ${JSON.stringify(productArray)}`);
    }

    checkInventory(product : Product){
        for(let shelf of this.shelves){
            if(shelf.getProduct().getId() == product.getId()){
                return shelf.hasProduct();
            }
        }
        return false;
    }

    removeItemFromInventory(product : Product){
        if(!this.checkInventory(product)){
            console.log('PRODUCT UNAVAILABLE');
            throw new Error('PRODUCT UNAVAILABLE');
        }
        for(let shelf of this.shelves){
            if(shelf.getProduct().getId() == product.getId()){
                console.log(`product : ${product.getId()} removed `);
                shelf.reduceProductCount();
                return
            }
        }
        throw new Error('PRODUCT UNAVAILABLE');
    }
}