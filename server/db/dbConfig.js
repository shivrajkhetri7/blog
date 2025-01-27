const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in the environment variables.");
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true, // Optional in Mongoose 6.x and above
            useUnifiedTopology: true, // Optional in Mongoose 6.x and above
        });
        console.log("Connected to MongoDB successfully.");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); // Exit the process with failure code
    }
};

module.exports = connectToDatabase;
