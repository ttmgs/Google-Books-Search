const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path")
const url = 'mongodb://127.0.0.1:27017/googlebooks'

const PORT = process.env.PORT || 3001;
const app = express();

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

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooksdb", { useNewUrlParser: true });





app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
