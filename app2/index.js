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
        client.close();
  });
};

connectionStart();

console.log("hello from node-docker - app2");
