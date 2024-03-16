import {QueueService} from "./services/QueueService";
import {Message} from "./models/Message";

function queueMain(){
    // create Message Queue
    const queueService = QueueService.getInstance();

    // create topic
    const t1 = queueService.addTopic("Topic 1");
    const t2 = queueService.addTopic("Topic 2");
    const t3 = queueService.addTopic("Topic 3");

    // add producers
    const p1 = queueService.createProducer("Producer 1");
    const p2 = queueService.createProducer("Producer 2");
    const p3 = queueService.createProducer("Producer 3");

    // create consumers
    const c1 = queueService.createConsumer('Consumer 1');
    const c2 = queueService.createConsumer('Consumer 2');
    // we have started our consumers

    // subscribe consumers to topic
    c1.subscribeToTopic(t1);
    c1.subscribeToTopic(t2);
    c1.subscribeToTopic(t3);

    c2.subscribeToTopic(t1)

    // produce message

    p1.produceMessage(t1, new Message('message1'));

    // automatically message gets consumed
}

queueMain();