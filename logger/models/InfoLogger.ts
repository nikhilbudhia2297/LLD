import {Logger} from "./Logger";
import {LogType} from "./LogType";

export class InfoLogger extends Logger{

    constructor(n : Logger | null) {
        super(n);
    }

    log(type  :LogType, message : string){
        if(type == LogType.INFO){
            console.log(`INFO : ${message}`);
        }else {
            super.log(type, message);
        }
    }
}