const {Kafka}=require("kafkajs");

const kafka=new Kafka({
    clientid:'my-app',
    brokers:['localhost:9092']

})

module.exports = { kafka }; 