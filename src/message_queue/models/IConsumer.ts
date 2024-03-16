import {Topic} from "./Topic";

export interface IConsumer{
    subscribeToTopic(topic : Topic) : void;
}