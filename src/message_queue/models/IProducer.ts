import {Message} from "./Message";
import {Topic} from "./Topic";

export interface IProducer{
    produceMessage(topic : Topic, message : Message) : void;
}