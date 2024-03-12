import {Logger} from "./Logger";
import {LogType} from "./LogType";

export class ErrorLogger extends Logger{
    constructor(next : Logger) {
        super(next);
    }

    log(type : LogType, message : string){
        if(type == LogType.ERROR){
            console.log(`ERROR : ${message}`);
        }else {
            super.log(type, message);
        }
    }
}