// REQUIRED PACKAGES
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");
// const controller = require("./controllers");

// APP CONFIGURATIONS
const port = 3001;
const adminRouter = require('./routes/admin');
const storeRouter = require('./routes/store');
const apiRouter = require("./routes/api");

// INITIALIZE EXPRESS
const app = express();

// LOG SERVER EVENTS
app.use(logger('dev'));

// REQUIRE API ROUTES
app.use('/admin', adminRouter);
app.use('/store', storeRouter);
app.use('/api', apiRouter);
// app.use(controller);

// INVOKE MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CONNECT TO THE DB
mongoose.connect("mongodb://localhost:27017/popup", { useNewUrlParser: true });

// INITIALIZE LISTEN
app.listen(port, function() {
  console.log(`> API server is listening on port ${port}.`);
});