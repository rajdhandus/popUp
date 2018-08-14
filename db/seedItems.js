// let db = require("../models");
// let item = require("./item.json");

// console.log('# of json records = ${item.length');

// let numberOfItems = item.length;

// let arrayOfItems = [];

import axios from "axios";

export default {
    getItemData: (item) => axios.get("/api/" + email),
};