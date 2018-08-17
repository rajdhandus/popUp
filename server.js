// REQUIRED PACKAGES
require ('dotenv').config(); 
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const apiRouter = require("./routes");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;
const logger = require("morgan");
// const controller = require("./controllers");

// Define middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the React App
// app.use(express.static(path.join(__dirname, 'views/build')));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "development") {
  app.use(express.static("/views/build"));

  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/../views/index.html`))
  })
}

// Add routes, both API and view
app.use(apiRouter);

// APP CONFIGURATIONS
// const adminRouter = require('./routes/admin');
// const storeRouter = require('./routes/store');

// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/popup";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
// mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/popup");

// INITIALIZE EXPRESS

app.use(logger('dev'));

// REQUIRE API ROUTES
// app.use('/admin', adminRouter);
// app.use('/store', storeRouter);
// app.use(controller);

app.listen(port, function() {
  console.log(`> API server is listening on port ${port}.`);
});