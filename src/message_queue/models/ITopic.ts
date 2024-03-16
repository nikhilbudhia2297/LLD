import {Message} from "./Message";

export interface ITopic{
    topicName : string;
    messages : Message[];

    enqueueMessage(message : Message) : void;

    readMessageIfPresent(offset : number) : Message | null;
}