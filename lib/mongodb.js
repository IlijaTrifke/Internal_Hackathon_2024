import { MongoClient } from "mongodb";

if (!process.env.MONGO_DB_URL) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URL"');
}

const url = process.env.MONGO_DB_URL;
const options = {
  minPoolSize: 10,
  maxPoolSize: 20,
};

let client;
let clientPromise;

if (process.env.APP_ENV == "development") {
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(url, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In Actionion mode, it's best to not use a global variable.
  client = new MongoClient(url, options);
  clientPromise = client.connect();
}
export default clientPromise;
