const { kafka } = require("./client");
const groups = process.argv[2];

if (!groups) {
  console.log("Please provide consumer groupId");
  console.log("Example: node consumer.js group1");
  process.exit(1);
}

async function init() {
  const consumer = kafka.consumer({ groupId: groups });

  console.log("connecting consumer");
  await consumer.connect();
  console.log("connected");

  console.log("subscribing to topic");
  await consumer.subscribe({
    topic: "first-topic",
    fromBeginning: false,
  });

  await consumer.run({
    eachMessage: async ({
      topic,
      partition,
      message,
      heartbeat,
      pause,
    }) => {
      console.log({
        group: groups,
        topic,
        partition,
        key: message.key
          ? message.key.toString()
          : null,
        value: message.value
          ? message.value.toString()
          : null,
        headers: message.headers,
      });
    },
  });
}

init();
