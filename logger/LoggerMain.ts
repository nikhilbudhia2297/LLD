import {ErrorLogger} from "./models/ErrorLogger";
import {DebugLogger} from "./models/DebugLogger";
import {InfoLogger} from "./models/InfoLogger";
import {LogType} from "./models/LogType";
import {Logger} from "./models/Logger";

function loggerSystem(){
    const logger: Logger = new ErrorLogger(new DebugLogger(new InfoLogger(null)));

    logger.log(LogType.DEBUG, "abc");
    logger.log(LogType.INFO, "abc");
    logger.log(LogType.ERROR, "abc");
}

loggerSystem();