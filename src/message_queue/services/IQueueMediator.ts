import {Topic} from "../models/Topic";
import {Message} from "../models/Message";

export interface IQueueMediator {
    addTopic(topicName : string) : Topic;

    publishMessage(topic : Topic, message : Message) : void;

    readMessageIfPresent(topic : Topic, offset : number) : Message | null;
}