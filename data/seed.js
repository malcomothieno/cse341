require('dotenv').config({ path: '../.env' });
const { MongoClient } = require('mongodb');

const sampleContacts = [
  {
    firstName: 'James',
    lastName: 'Carter',
    email: 'james.carter@example.com',
    favoriteColor: 'Navy Blue',
    birthday: '1990-06-15',
  },
  {
    firstName: 'Sophia',
    lastName: 'Nkemdirim',
    email: 'sophia.nkemdirim@example.com',
    favoriteColor: 'Emerald Green',
    birthday: '1997-11-03',
  },
  {
    firstName: 'David',
    lastName: 'Omondi',
    email: 'david.omondi@example.com',
    favoriteColor: 'Crimson',
    birthday: '1993-02-28',
  },
];

async function seed() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME || 'contactsDB');
    const result = await db.collection('contacts').insertMany(sampleContacts);
    console.log(`Inserted ${result.insertedCount} contacts`);
    console.log('Inserted IDs:', result.insertedIds);
  } finally {
    await client.close();
  }
}

seed().catch(console.error);
