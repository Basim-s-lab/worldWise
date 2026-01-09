import mongoose from 'mongoose'

let isConnected = false

const connectionDb = async () => {
    if ((isConnected)) return;
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {})
        isConnected = true;
        console.log(`MongoDb connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectionDb