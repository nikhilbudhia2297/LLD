import {IProducer} from "./IProducer";
import {Message} from "./Message";
import {Topic} from "./Topic";
import {IQueueMediator} from "../services/IQueueMediator";
import {QueueMediator} from "../services/QueueMediator";

export class Producer implements IProducer{
    private readonly id : string;
    private queueMediator : IQueueMediator = QueueMediator.getInstance();

    constructor(id : string) {
        this.id = id;
    }

    getProducerId(){
        return this.id;
    }

    produceMessage(topic : Topic, message : Message) : void{
        this.queueMediator.publishMessage(topic, message);
        console.log(`message ${message.getValue()} produced to ${topic.topicName} by producer ${this.getProducerId()}`);
    }

}