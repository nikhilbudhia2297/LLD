import {LogType} from "./LogType";

export abstract class Logger{
    nextLogger : Logger | null

    protected constructor(nextLogger : Logger | null) {
        this.nextLogger = nextLogger;
    }

    log (type : LogType, message : string){
        if(this.nextLogger){
            this.nextLogger.log(type, message);
        }
    }
}