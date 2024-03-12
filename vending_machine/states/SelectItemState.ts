import {StateChanges} from "./StateChanges";
import {VendingMachine} from "../VendingMachine";
import {Coin} from "../coins/Coin";
import {IdleState} from "./IdleState";
import {DispensingState} from "./DispensingState";
import {Product} from "../Product";

export class SelectItemState implements StateChanges{
    constructor() {
        console.log('machine in SELECT ITEM STATE. Please choose product');
    }

    dispenseItem(vm: VendingMachine): void {
        throw new Error('NOT ALLOWED');
    }

    fullRefund(vm: VendingMachine): void {
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

    returnChange(vm: VendingMachine,  amt : number): void {
        throw new Error('NOT ALLOWED');
    }

    selectItem(vm: VendingMachine, product : Product): void {
        vm.setState(new DispensingState(vm, product));
    }

    startSelectItem(vm: VendingMachine): void {
        throw new Error('NOT ALLOWED');
    }

}