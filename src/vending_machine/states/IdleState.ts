import {StateChanges} from "./StateChanges";
import {VendingMachine} from "../VendingMachine";
import {HasCoinState} from "./HasCoinState";
import {Coin} from "../coins/Coin";
import {Product} from "../Product";

export class IdleState implements StateChanges{

    constructor(vm : VendingMachine) {
        console.log('machine in IDLE state');
        vm.coinList = [];
    }

    dispenseItem(vm: VendingMachine): void {
        throw new Error('NOT ALLOWED');
    }

    fullRefund(vm: VendingMachine): void {
        throw new Error('NOT ALLOWED');
    }

    insertCoin(vm: VendingMachine, coin : Coin): void {
        throw new Error('NOT ALLOWED');
    }

    onStart(vm: VendingMachine): void {
        vm.setState(new HasCoinState());
    }

    returnChange(vm: VendingMachine,  amt : number): void {
        throw new Error('NOT ALLOWED');
    }

    selectItem(vm: VendingMachine, product : Product): void {
        throw new Error('NOT ALLOWED');
    }

    startSelectItem(vm: VendingMachine): void {
        throw new Error('NOT ALLOWED');
    }


}