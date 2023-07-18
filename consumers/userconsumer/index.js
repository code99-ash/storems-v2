const amqp = require('amqplib')

require('dotenv').config()
const mongoose = require('mongoose')
const User = require('./models/User')

const dbConfig = {
    url: process.env.PRODUCT_DB,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
}
// console.log(dbConfig)
async function connectDB() {
    try {
        await mongoose.connect(dbConfig.url, dbConfig.options);
        console.log('Connected to db')
    } catch (error) {
        console.log('error connecting to db', error)
    }
}


// Step 1 : Connect to the rabbitMQ server
// Step 2 : Create a new channel
// Step 2 : Create the exchange
// Step 3 : Bind the queue to the exchange
// Step 4 : Consume messages from the queue

async function consumeUserData() {
    const connection = await amqp.connect(process.env.AMQP_CONNNECT)
    const channel = await connection.createChannel();
 
    await channel.assertExchange('userExchange', 'direct')

    const q = await channel.assertQueue('userQueue');
    console.log(q.queue)

    await channel.bindQueue(q.queue, 'userExchange', 'create');

    channel.consume(q.queue, async (msg) => {
        const data = JSON.parse(msg.content);

        await connectDB()
        await User.create(data.data)
        // console.log(q.queue, data.data)
        channel.ack(msg)
    })
}
consumeUserData();