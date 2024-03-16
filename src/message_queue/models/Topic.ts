import {Message} from "./Message";
import {ITopic} from "./ITopic";

export class Topic implements ITopic{
    topicName : string;
    messages : Message[];
    // TODO : MULTITHREADING some locking mechanism

    constructor(topicName : string) {
        this.topicName = topicName;
        this.messages = [];
    }

    enqueueMessage(message: Message): void {
        // get lock
        this.messages.push(message);
        // release lock
    }

    readMessageIfPresent(offset : number): Message | null {
        // get lock
        if(!this.messages || offset >= this.messages.length){
            return null;
        }
        const message = this.messages[offset];
        // release lock
        return message;
    }


}