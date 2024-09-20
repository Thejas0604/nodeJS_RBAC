const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
    console.log(
      `Successfully connected: ${connect.connection.host}, ${connect.connection.name}`
    );
  } catch (error) {
    console.log(`Database connection failed: ${error}`);
    process.exit(1);
  }
};

module.exports = dbConnect;
