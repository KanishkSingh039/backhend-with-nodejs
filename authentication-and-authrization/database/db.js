const mongoose = require('mongoose');
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected with databse");

    } catch (e) {
        console.log("failed to connect with databse");
    }
}

module.exports = connect;