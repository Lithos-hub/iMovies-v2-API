import mongoose, { ConnectOptions } from "mongoose";
import config from "./config/config";

const options: ConnectOptions = {
  serverSelectionTimeoutMS: 5000,
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};

mongoose.connect(config.DB.URI, options);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Mongodb connection stablished");
});

connection.on("error", (err) => {
  console.log(err);
  process.exit(0);
});
