var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var storeSchema = new Schema({
    // Store Name
    storeName: {
        type: String,
        trim: true,
        required: "Please enter your Store Name."
    },

    // About Store
    storeAbout: {
        type: String,
        trim: true,
        required: "Please tell us about your Store."
    },

    // Store Email
    storeEmail: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address."]
    },

    //  Store Location
    storeStreet: {
        type: String,
        trim: true,
        required: "Please enter the store's street address."
    },

    storeCity: {
        type: String,
        trim: true,
        required: "Please enter the city in which your store is located."
    },

    storeState: {
        type: String,
        trim: true,
        // match: [^(?i:A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$, "Please enter a valid state abbreviation."]
    },

    storeZip: {
        type: Number,
        trim: true,
        match: [/^\d{5}$|^\d{5}-\d{4}$/, "Please enter the store's zipcode."]
    },

    // Store Phone Number //////
    storePhone: {
        type: String,  // Might need to be number here.
        unique: true,
        match: [/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, "Please enter a valid phone number."]
    },

    storeLogo: {
        type: String,
        trim: true,
        required: "Please enter the store's logo image URL."
    }

});

var store = mongoose.model("Store", storeSchema);

module.exports = store;