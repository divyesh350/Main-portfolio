import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

const connection = {};

async function dbConnect() { 
  //prevent multiple connections
  if (connection.isConnected) {
    console.log("Already connected to MongoDB");
    return;
  }
  //connect to the database if not connected
  try {
    const db = await mongoose.connect(MONGODB_URI || "");
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Failed to connect to MongoDB",error);
    process.exit(1);
  }
}

export default dbConnect;
