const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://talk2comp:K3eZWKdof36Zg07n@mongocluster.yecrspp.mongodb.net/";

const client = new MongoClient(uri);

async function run() {
  try {
    // Get the database and collection on which to run the operation
    const database = client.db("products");
    const movies = database.collection("allProducts");

    // Execute query
    const cursor = movies.find();

    let data = [];
    // Print returned documents
    for await (const doc of cursor) {
      data.push(doc);
    }
    return data;
  } finally {
    await client.close();
  }
}
const products5 = (async function () {
  let docsList = await run();
  console.log(docsList);
  return docsList;
})();
module.exports = products5;
