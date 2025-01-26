"use server";
import { connectDBTest } from "./db-connect-base";

export default async function dbTest() {
  const client = await connectDBTest;
  const db = client.db("posts_db");
  const result = await db.collection("posts").find().toArray();

  return result.map((item) => ({ ...item, _id: item._id.toString() }));
}
