const { kafka } = require("./client");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  const producer = kafka.producer();

  console.log("connecting producer");
  await producer.connect();
  console.log("connected");

  rl.setPrompt("Enter message to send (name location): ");
  rl.prompt();

  rl.on("line", async (line) => {
    try {
      const [ridername, location] = line.split(" ");

      console.log("sending message");

      await producer.send({
        topic: "first-topic",
        messages: [
          {
            partition:
              location.toLowerCase() === "east" ? 0 : 1,
            key: ridername,
            value: JSON.stringify({
              name: ridername,
              location,
            }),
          },
        ],
      });

      console.log("message sent successfully");
      rl.prompt();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  });

  rl.on("close", async () => {
    console.log("Exiting producer");
    await producer.disconnect();  // ✅ disconnect only here
    process.exit(0);
  });
}

init();
