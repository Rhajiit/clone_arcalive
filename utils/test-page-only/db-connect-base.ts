import { MongoClient } from "mongodb";
const url = process.env.NEXT_PUBLIC_MONGODB_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
if (!url) {
  throw new Error("The MONGODB_URL environment variable is not defined");
}
let connectDBTest: Promise<MongoClient>;
if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect();
  }
  connectDBTest = global._mongo;
} else {
  connectDBTest = new MongoClient(url).connect();
}
export { connectDBTest };
