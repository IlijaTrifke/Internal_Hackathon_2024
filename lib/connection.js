import clientPromise from "./mongodb";

export const storeDatabaseConnection = async () => {
  const client = await clientPromise;
  const db = client.db("store");
  return db;
};
