const { kafka } = require('./client');

async function init() {
    const admin = kafka.admin();

    console.log("connecting kafka admin");
    await admin.connect();
    console.log("connected");

    console.log("creating topic");
    await admin.createTopics({
        topics: [{
            topic: 'first-topic',   // ⚠️ Avoid spaces in topic names
            numPartitions: 2,
            replicationFactor: 1   // ⚠️ Use 1 if running single broker locally
        }]
    });
    const topics = await admin.listTopics();
console.log("Existing topics:", topics);


    await admin.disconnect();
}

init();
