const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myDatabase';

// Main loop
async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  
  const db = client.db(dbName);
  const collection = db.collection('myCollection');

  // Insert a document
  const insertResult = await collection.insertOne({ name: 'John Doe', age: 30 });
  console.log('Inserted document:', insertResult.insertedId);

  // Find a document
  const findResult = await collection.findOne({ name: 'John Doe' });
  console.log('Found document:', findResult);

  // Update a document
  const updateResult = await collection.updateOne({ name: 'John Doe' }, { $set: { age: 31 } });
  console.log('Updated document count:', updateResult.modifiedCount);

  // Delete a document
  const deleteResult = await collection.deleteOne({ name: 'John Doe' });
  console.log('Deleted document count:', deleteResult.deletedCount);

  // Close the connection
  await client.close();
}

main().catch(console.error);