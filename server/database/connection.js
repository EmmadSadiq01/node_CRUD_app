const mongoose = require('mongoose')
const connectDB = async () => {
    try {
        // mongodb connection
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        })
        console.log(`mongoDB Connection ${conn.connection.host}`)
    } catch (error) {
        console.log(error);
        process.exit(1);

    }
}

module.exports = connectDB