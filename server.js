const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const connectDB = require("./config/db")

// const bodyParser = require("body-parser")

// port and enabling the express app
const PORT = process.env.PORT || 8080;
const app = express();



// Define middleware here
app.use(express.urlencoded({ extended: true }));


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// connecting to mongoose 
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });
connectDB()


// json parsing
app.use(express.json());


// Define API routes here
app.use('/api/books', require('./routes/api-routes'))
app.use('/api/books/:id', require('./routes/api-routes'))


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
// app.use(express.static(__dirname + '/client/public'));
// app.get('/*', function(req,res) {
// res.sendFile(path.join(__dirname + '/client/public/index.html'));

// });


// port
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
