const MongoClient = require("mongodb").MongoClient;

// Connection URL
const url = "mongodb://mongodb:27017";

// Database Name
const dbName = "mydb";

// Create a new MongoClient
const client = new MongoClient(url);

const connectionStart = () => {
  // Use connect method to connect to the Server
  client.connect(function (err) {
    console.log("Connected successfully to server");
      const db = client.db(dbName);
      // insertDocuments(db).then(()=>client.close());
      //   client.close();
  });
};

const insertDocuments = function (db) {
  // Get the documents collection
  const collection = db.collection("documents");
  // Insert some documents
  return collection
    .insertMany([
      { name: "n1" },
      { name: "n2" },
      { name: "n3" },
      { name: "n4" },
    ])
    .then((v) => {
      console.log("Inserted 4 documents into the collection");
    });
};

connectionStart();

console.log("hello from node-docker");
