const express = require("express");
const mongoose = require("mongoose");
const books = require("./routes/api-routes");
// const bodyParser = require("body-parser")

// port and enabling the express app
const PORT = process.env.PORT || 8080;
const app = express();


// const bodyParser = require("body-parser");
const path = require("path");
const bodyParser = require("body-parser");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use('/api/books', books)
app.use('/api/books/:id', books)

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
app.use(express.static(__dirname + '/client/public'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname + '/client/public/index.html'));

});

// connecting to mongoose 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooksdb", { useNewUrlParser: true });


// port
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
