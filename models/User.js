var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({

  //Store account
  store_id: {
    type: Schema.Types.ObjectId,
    ref: "Store"
  },

  //First name
  userFirstName: {
    type: String,
    trim: true,
    required: "Please enter your first name."
  },

  //Last name
  userLastName: {
    type: String,
    trim: true,
    required: "Please enter your last name."
  },

  //Password at least 6 characters
  userPassword: {
    type: String,
    trim: true,
    required: "Please enter a password.",
    validate: [
      function (input) {
        return input.length >= 6;
      },
      "Please enter a password at least 6 characters long."
    ]
  },

  //Valid phone number
  userPhone: {
    type: String,
    unique: true,
    match: [/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, "Please enter a valid phone number."]
  },

  //Email address with regex validation
  userEmail: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  admin: {
    type: Boolean,
    default: false
  },

  //"Member since" timestamp
  memberSince: {
    type: Date,
    default: Date.now
  }
});

var User = mongoose.model("User", userSchema);

module.exports = User;