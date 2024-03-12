import {VendingMachine} from "../VendingMachine";
import {Coin} from "../coins/Coin";
import {Product} from "../Product";

export interface StateChanges{

    onStart(vm : VendingMachine): void;

    insertCoin(vm : VendingMachine, coin : Coin) : void;

    startSelectItem(vm : VendingMachine) : void;

    selectItem(vm : VendingMachine, product : Product) : void;

    fullRefund(vm : VendingMachine) : void;

    dispenseItem(vm : VendingMachine) : void;

    returnChange(vm : VendingMachine, refundAmount : number) : void;
}