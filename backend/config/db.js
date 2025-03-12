require('dotenv').config();
const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected...');
    } catch (error) {
        console.log('MongoDB URI:', process.env.MONGO_URI);
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDb;