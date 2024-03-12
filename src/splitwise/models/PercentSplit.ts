import {Split} from "./Split";
import {User} from "./User";

export class PercentSplit extends Split{
    percent : number

    constructor(user : User, percent : number) {
        super(user);
        this.percent = percent;
    }

    getPercent(){
        return this.percent;
    }


}