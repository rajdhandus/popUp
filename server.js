// REQUIRED PACKAGES
require ('dotenv').config(); 
const express = require("express");
const bodyParser = require("body-parser");
const apiRouter = require("./routes");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;
const logger = require("morgan");
// const controller = require("./controllers");

// Serve static files from the React App
app.use(express.static(path.join(__dirname, 'views/build')));


// APP CONFIGURATIONS
const adminRouter = require('./routes/admin');
const storeRouter = require('./routes/store');

const MONGODB_URI = process.env.MONGODB_URI;

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// INITIALIZE EXPRESS

app.use(logger('dev'));

// REQUIRE API ROUTES
app.use('/admin', adminRouter);
app.use('/store', storeRouter);
app.use(apiRouter);
// app.use(controller);


// INVOKE MIDDLEWARE

// CONNECT TO THE DB

// INITIALIZE LISTEN
app.listen(port, function() {
  console.log(`> API server is listening on port ${port}.`);
});