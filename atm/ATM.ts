import {StateActions} from "./models/state/StateActions";
import {Card} from "./models/Card";
import {IdleState} from "./models/state/IdleState";
import {CashInventory} from "./models/CashInventory";
import {CashHandler} from "./models/cash_handler/CashHandler";
import {FiveHundredCashHandler} from "./models/cash_handler/FiveHundredCashHandler";
import {TwoHundredCashHandler} from "./models/cash_handler/TwoHundredCashHandler";
import {HundredCashHandler} from "./models/cash_handler/HundredCashHandler";

export class ATM{
    private state : StateActions;
    private card : Card;
    private inventory : CashInventory;
    private cashHandler : CashHandler;

    constructor() {
        this.inventory = new CashInventory();
        this.state = new IdleState(this);
        this.cashHandler = new FiveHundredCashHandler(new TwoHundredCashHandler(new HundredCashHandler(null)));
    }

    getState(){
        return this.state;
    }

    getCard(){
        return this.card;
    }

    getInventory(){
        return this.inventory;
    }

    setCard(card : Card){
        this.card = card;
    }

    setState(state : StateActions){
        this.state = state;
    }

    getCashHandler(){
        return this.cashHandler;
    }
}