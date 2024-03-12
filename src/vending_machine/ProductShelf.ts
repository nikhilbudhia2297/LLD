import {Product} from "./Product";

export class ProductShelf{
    private product : Product;
    private productCount : number;

    constructor(product : Product, count : number) {
        this.product = product;
        this.productCount = count;
    }

    getProduct(){
        return this.product;
    }

    hasProduct(){
        return this.productCount > 0;
    }

    reduceProductCount(){
        if(this.hasProduct()){
            this.productCount --;
            return;
        }
        console.log('PRODUCT UNAVAILABLE');
        throw new Error('PRODUCT UNAVAILABLE');
    }

}