import mongoose from 'mongoose'

const connectionDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {})
        console.log(`MongoDb connected: ${conn.connection.host}`.cyan.bold)
    } catch (error) {
        console.log(`Error: ${error.message}`.red.underline)
        process.exit(1)
    }
}

export default connectionDb