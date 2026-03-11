const mongoose = require('mongoose');

function connectToDB() {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Server is connected to the DB");
    })
    .catch((err) => {
        console.log("Error connecting to the DB", err);
        process.exit(1);
    });
}

module.exports = connectToDB;