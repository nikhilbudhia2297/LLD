import {Inventory} from "./Inventory";
import {StateChanges} from "./states/StateChanges";
import {IdleState} from "./states/IdleState";
import {Coin} from "./coins/Coin";

export class VendingMachine{
    private inventory : Inventory
    private state : StateChanges
    coinList : Coin[]

    constructor() {
        this.state = new IdleState(this);
        this.coinList = [];
        this.inventory = new Inventory();
    }

    getInventory(){
        return this.inventory;
    }

    getState(){
        return this.state;
    }

    setState(state : StateChanges){
        this.state = state;
    }

    getCoinList(){
        return this.coinList;
    }

    getCurrentCoinValue(){
        let sum = 0;
        this.coinList.map((coin : Coin) => {
            sum += coin.getValue();
        });
        return sum;
    }
}