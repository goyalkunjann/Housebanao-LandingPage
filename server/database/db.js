const mongoose = require('mongoose');
require('dotenv').config();

const DBConnection = async () => {
    const MONGO_URL = process.env.MONGO_URL;
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connection established");
    } catch (error) {
        console.error("Error connecting to database:", error.message);
    }
};

module.exports = DBConnection;
