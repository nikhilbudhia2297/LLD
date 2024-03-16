import {Topic} from "./models/Topic";
import {Message} from "./models/Message";

export class MessageQueue{
    static queueList : Map<Topic, Message[]> = new Map<Topic, Message[]>();

}