import "dotenv/config";
import { connect } from "mongoose";
const { MongoClient, ServerApiVersion } = require("mongodb");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};

async function dbConnect(): Promise<void> {
  const DB_URI = <string>process.env.DB_URI;
  await connect(DB_URI, options);
  if (DB_URI.includes("srv")) {
    const client = new MongoClient(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });

    client.connect(() => {
      client.close();
    });
  }
}
export default dbConnect;
