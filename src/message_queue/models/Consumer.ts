import {IConsumer} from "./IConsumer";
import {Topic} from "./Topic";
import {IQueueMediator} from "../services/IQueueMediator";
import {QueueMediator} from "../services/QueueMediator";

export class Consumer implements IConsumer{
    private readonly id : string;
    queueMediator : IQueueMediator;
    subscribedTopics : Topic[];
    topicToOffsetMap : Map<Topic, number>

    constructor(id : string) {
        this.id = id;
        this.queueMediator = QueueMediator.getInstance();
        this.subscribedTopics = [];
        this.topicToOffsetMap = new Map<Topic, number>();
        this.init()
    }

    init(){
        // create new thread for startConsuming
        // start the thread
        this.startConsuming();
    }

    getConsumerId(){
        return this.id;
    }

    startConsuming(): void {
        while (true){
            for(let topic of this.subscribedTopics){
                const currentOffset = this.topicToOffsetMap.get(topic)!;
                const message = this.queueMediator.readMessageIfPresent(topic,currentOffset);
                if(message){
                    console.log(`consumer : ${this.getConsumerId()} consumed message : ${message} from topic : ${topic}`);
                    this.topicToOffsetMap.set(topic, currentOffset+1);
                }
            }
        }
    }

    subscribeToTopic(topic : Topic): void {
        this.subscribedTopics.push(topic);
        this.topicToOffsetMap.set(topic, 0);
    }

}