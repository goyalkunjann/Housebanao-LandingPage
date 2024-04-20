const mongoose = require('mongoose');
require('dotenv').config();

const DBConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connection established");
    } catch (error) {
        console.error("Error connecting to database:", error.message);
        process.exit(1);
    }
};

module.exports = DBConnection;
