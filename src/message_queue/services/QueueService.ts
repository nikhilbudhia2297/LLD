import {IQueueService} from "./IQueueService";
import {IConsumer} from "../models/IConsumer";
import {IProducer} from "../models/IProducer";
import {Topic} from "../models/Topic";
import {IQueueMediator} from "./IQueueMediator";
import {QueueMediator} from "./QueueMediator";
import {Consumer} from "../models/Consumer";
import {Producer} from "../models/Producer";

export class QueueService implements IQueueService{
    private static INSTANCE : IQueueService;
    private queueMediator : IQueueMediator = QueueMediator.getInstance();

    private constructor() {
    }

    static getInstance(){
        if(!QueueService.INSTANCE){
            QueueService.INSTANCE = new QueueService();
        }
        return QueueService.INSTANCE;
    }

    addTopic(topicName: string): Topic {
        return this.queueMediator.addTopic(topicName);
    }

    createConsumer(consumerName: string): IConsumer {
        return new Consumer(consumerName);
    }

    createProducer(producerName: string): IProducer {
        return new Producer(producerName);
    }



}