import { getDb } from "../../Config/database.js";

export async function createUser(userData) {
  const db = getDb();
  const result = await db.collection("users").insertOne(userData);
  return result.insertedId;
}

export async function findUserByEmail(email) {
  const db = getDb();
  return await db.collection("users").findOne({ email });
}

export async function findUserById(id) {
  const db = getDb();
  return await db.collection("users").findOne({ _id: id });
}