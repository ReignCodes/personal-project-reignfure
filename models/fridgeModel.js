// const { link } = require('fs');
const mongoose = require('mongoose');
const {Schema} = mongoose;

const fridgeSchema = new Schema({
  name: {
    type: String,
    required: [true, 'A fridge name is required.'],
    minlength:[1,'Minimun length for the fridge name is 1 characters.']
  },
  organization: {
    type: String,
    required: [true, 'An organization name is required.'],
    minlength:[1,'Minimun length for the organization name is 1 character.']
  },
  location: {
    street_address: {
        type: String,
        required: [true, 'The street address is required.'],
        minlength:[5,'Minimun length for the street address is 5 characters.']
    },
    city: {
        type: String,
        required: [true, 'The city is required.'],
        minlength:[3,'Minimun length for the city is 3 characters.']
    },
    zip: {
        type: Number,
        required: [true, 'The zip code is required.'],
        minlength:[5,'Minimun length for the zip code is 5 characters.']
    },
    County: {
        type: String,
        required: [true, 'The country is required.'],
        minlength:[3,'Minimun length for the country is 3 characters.']
    },
    Country: {
        type: String,
        required: [true, 'The country is required.'],
        minlength:[3,'Minimun length for the country is 3 characters.']
    }
  },
  hours: {
    type: TimeRanges,
    required: [true, 'Open hours are required']
  },
  year_opened: {
    type: Number,
    required: [true, 'The price is required.'],
    minlength: [1990, 'The minimum year is 1990']
  },
  freezer: {
    type: Boolean,
    required: [true, 'this is required'],
  },
  dry_pantry: {
    type: Boolean,
    required: [true, 'this is required'],
  },
  accepts: {
    type: Array
  },
  not_accepts: {
    type: Array
  },
  details: {
    type: String
  },
  contact: {
    type: String,
    required: [true, 'this is required'],
    minlength: [10, 'Min length for contact info is 10 characters.']
  }
});

const Fridge = mongoose.model('Fridge', fridgeSchema);

module.exports = Fridge;