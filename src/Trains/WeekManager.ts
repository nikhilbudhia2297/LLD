import {FareCap} from "./trainConstants";

export class WeekManager{
    currWeekCharge : Map<string, number>;
    currWeekQueue : Map<string, any[]>; // {timeStamp, charge}

    constructor() {
        this.currWeekQueue = new Map<string, any[]>(); // from+to : []
        this.currWeekQueue.set('GG', []);
        this.currWeekQueue.set('GR', []);
        this.currWeekQueue.set('RR', []);
        this.currWeekQueue.set('RG', []);

        this.currWeekCharge = new Map<string, number>(); // from+to : []
        this.currWeekCharge.set('GG', 0);
        this.currWeekCharge.set('GR', 0);
        this.currWeekCharge.set('RR', 0);
        this.currWeekCharge.set('RG', 0);

    }

    getLineQueue(identifier : string){
        return this.currWeekQueue.get(identifier);
    }

    addJourney(currTime : Date, charge : number, from : string, to : string){
        const identifier = from[0]+to[0];
        let currQueue = this.currWeekQueue.get(identifier);
        let currCharge = this.currWeekCharge.get(identifier);
        if(!currQueue || !currCharge){
            throw new Error('INVALID');
        }

        if(!currQueue.length){
            currQueue.push({timeStamp : currTime, charge : charge});
            currCharge +=charge;
            this.currWeekCharge.set(identifier, currCharge);
            this.currWeekQueue.set(identifier, currQueue);
            return;
        }

        let firstTimestamp = currQueue[0].valueOf();
        while(firstTimestamp && currTime.valueOf() - firstTimestamp > 7 * 1){
            currCharge -= currQueue[0].charge;
            currQueue.shift();
            firstTimestamp = currQueue.length ? currQueue[0] : null;
        }
        currQueue.push({timeStamp : currTime, charge : charge});
        currCharge +=charge;
        this.currWeekCharge.set(identifier, currCharge);
        this.currWeekQueue.set(identifier, currQueue);
    }

    getCharge(currTimeStamp : Date, charge : number, from : string, to : string) : number{
        const identifier = from[0]+to[0];
        let currQueue = this.currWeekQueue.get(identifier);
        let currCharge = this.currWeekCharge.get(identifier)
        if(!currQueue || !currCharge){
            throw new Error('INVALID');
        }

        const firstTimestamp = currQueue[0].time.valueOf(); // time in MS

        if(currTimeStamp.valueOf() - firstTimestamp < 7 * 1){
            if(currCharge >= FareCap.getCap(from, to)){
                return 0;
            }else if(currCharge + charge >= FareCap.getCap(from, to)){
                return currCharge + charge - FareCap.getCap(from, to);
            }
            return charge;
        }
        return charge;
    }
}