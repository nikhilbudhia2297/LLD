import {StateChanges} from "./StateChanges";
import {VendingMachine} from "../VendingMachine";
import {Coin} from "../coins/Coin";
import {SelectItemState} from "./SelectItemState";
import {IdleState} from "./IdleState";
import {Product} from "../Product";

export class HasCoinState implements StateChanges{

    constructor() {
        console.log('INSERT COINS');
    }

    dispenseItem(vm: VendingMachine): void {
        throw new Error(' NOT ALLOWED');
    }

    fullRefund(vm: VendingMachine): void {
        console.log('COLLECT YOUR COINS : ');
        vm.coinList.map((coin : Coin)=>{
            console.log(`${coin.getValue()} , `);
        })
        vm.coinList = [];
        vm.setState(new IdleState(vm));
    }

    insertCoin(vm: VendingMachine, coin: Coin): void {
        console.log(`accepted coin of value: ${coin.getValue()}`);
        vm.coinList.push(coin);
    }

    onStart(vm: VendingMachine): void {
        throw new Error(' NOT ALLOWED');
    }

    returnChange(vm: VendingMachine, amt : number): void {
        throw new Error(' NOT ALLOWED');
    }

    selectItem(vm: VendingMachine, product : Product): void {
        throw new Error(' NOT ALLOWED');
    }

    startSelectItem(vm: VendingMachine): void {
        console.log(`coins present : ${JSON.stringify(vm.coinList)}`)
        vm.setState(new SelectItemState());
    }


}