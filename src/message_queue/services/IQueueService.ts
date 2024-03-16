import {Topic} from "../models/Topic";
import {IProducer} from "../models/IProducer";
import {IConsumer} from "../models/IConsumer";

export interface IQueueService {
    addTopic(topicName : string) : Topic;

    createProducer(producerName : string)  : IProducer;

    createConsumer(consumerName : string) : IConsumer;
}