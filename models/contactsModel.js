const { getDatabase } = require('./db');
const { ObjectId } = require('mongodb');

const COLLECTION = 'contacts';

async function getAllContacts() {
  const db = getDatabase();
  return db.collection(COLLECTION).find({}).toArray();
}

async function getContactById(id) {
  const db = getDatabase();
  return db.collection(COLLECTION).findOne({ _id: new ObjectId(id) });
}

async function createContact(contact) {
  const db = getDatabase();
  const result = await db.collection(COLLECTION).insertOne(contact);
  return result;
}

async function updateContact(id, updatedFields) {
  const db = getDatabase();
  const result = await db.collection(COLLECTION).updateOne(
    { _id: new ObjectId(id) },
    { $set: updatedFields }
  );
  return result;
}

async function deleteContact(id) {
  const db = getDatabase();
  const result = await db.collection(COLLECTION).deleteOne({ _id: new ObjectId(id) });
  return result;
}

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
