var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    
    //First name
    firstName: {
      type: String,
      trim: true,
      required: "Please enter your first name."
    },
    
    //Last name
    lastName: {
      type: String,
      trim: true,
      required: "Please enter your last name."
    },
    
    //Unique username
    userName: {
      type: String,
      trim: true,
      unique: true,
      required: "Please enter a username."
    },
    
    //Password at least 6 characters
    password: {
      type: String,
      trim: true,
      required: "Please enter a password.",
      validate: [
        function(input) {
          return input.length >= 6;
        },
        "Please enter a password at least 6 characters long."
      ]
    },

    phone: {
      type: String,
      unique: true,
      match: [/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, "Please enter a valid phone number."]
    },
    
    //Email address with regex validation
    email: {
      type: String,
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    admin: {
      type: Boolean
    },

    //"Member since" timestamp
    memberSince: {
      type: Date,
      default: Date.now
    }
  });

  var user = mongoose.model("User", userSchema);

  module.exports = User;