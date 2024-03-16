import {IQueueMediator} from "./IQueueMediator";
import {Topic} from "../models/Topic";
import {Message} from "../models/Message";
import {MessageQueue} from "../MessageQueue";

export class QueueMediator implements IQueueMediator{
    private static INSTANCE : IQueueMediator;

    private constructor() {
    }

    public static getInstance(){
        if(!this.INSTANCE){
            this.INSTANCE = new QueueMediator()
        }
        return this.INSTANCE;
    }

    addTopic(topicName: string): Topic {
        const topic = new Topic(topicName);
        MessageQueue.queueList.set(topic, []);
        return topic;
    }

    publishMessage(topic: Topic, message: Message): void {
        let messages = MessageQueue.queueList.get(topic)!;
        messages.push(message)
        MessageQueue.queueList.set(topic, messages);
    }

    readMessageIfPresent(topic: Topic, offset : number): Message | null {
        return topic.readMessageIfPresent(offset);
    }


}