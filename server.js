const express = require("express");
const mongoose = require("mongoose");
const books = require("./routes/api/api-routes");
// const bodyParser = require("body-parser")

// port and enabling the express app
const PORT = process.env.PORT || 3000;
const app = express();



// const bodyParser = require("body-parser");
const path = require("path");
const bodyParser = require("body-parser");
const url = 'mongodb://127.0.0.1:27017/googlebooks'



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ttmgs:Windsor2000!!@cluster0.o8fsr.mongodb.net/googlebooks?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());





// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// connecting to mongoose 

mongoose.connect(url, { useNewUrlParser: true })
const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})






// Define API routes here
app.use('/api/books', books)











// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
app.use(express.static(__dirname + '/client/public'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname + '/client/public/index.html'));

});







// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooksdb", { useNewUrlParser: true });





app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
