import {StateChanges} from "./StateChanges";
import {VendingMachine} from "../VendingMachine";
import {Coin} from "../coins/Coin";
import {IdleState} from "./IdleState";
import {Product} from "../Product";

export class DispensingState implements StateChanges{
    product : Product;

    constructor(vm : VendingMachine, product : Product) {
        this.product = product;
        this.dispenseItem(vm);
    }

    dispenseItem(vm: VendingMachine): void {
        let totalAmount = 0;
        vm.coinList.map((coin) => {
            totalAmount +=coin.getValue();
        });
        if(totalAmount < this.product.getValue()){
            this.fullRefund(vm);
            vm.setState(new IdleState(vm));
            return;
        }

        vm.getInventory().removeItemFromInventory(this.product);
        console.log(`COLLECT ITEM ${this.product.getId()}`);
        const refundAmount = totalAmount - this.product.getValue();
        this.returnChange(vm, refundAmount);
        vm.setState(new IdleState(vm));
    }

    fullRefund(vm: VendingMachine): void {
        console.log('INSUFFICIENT VALUE');
        console.log('COLLECT YOUR COINS : ');
        vm.coinList.map((coin : Coin)=>{
            console.log(`${coin.getValue()} , `);
        })
        vm.coinList = [];
        vm.setState(new IdleState(vm));
    }

    insertCoin(vm: VendingMachine, coin : Coin): void {
        throw new Error('NOT ALLOWED');
    }

    onStart(vm: VendingMachine): void {
        throw new Error('NOT ALLOWED');
    }

    returnChange(vm: VendingMachine, refundAmount : number): void {
        console.log(`collect change ${refundAmount}`);
    }

    selectItem(vm: VendingMachine, product : Product): void {
        throw new Error('NOT ALLOWED');
    }

    startSelectItem(vm: VendingMachine): void {
        throw new Error('NOT ALLOWED');
    }

}