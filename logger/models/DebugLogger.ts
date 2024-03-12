import {Logger} from "./Logger";
import {LogType} from "./LogType";

export class DebugLogger extends Logger{

    constructor(nextLogger : Logger) {
        super(nextLogger);
    }

    log(type : LogType, message : string){
        if(type == LogType.DEBUG){
            console.log(`DEBUG : ${message}`);
        }else {
            super.log(type,message);
        }
    }
}