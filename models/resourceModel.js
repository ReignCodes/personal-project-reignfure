const mongoose = require('mongoose');
const {Schema} = mongoose;

const resourceSchema = new Schema({
  name: {
    type: String,
    // required: [true, 'A fridge name is required.'],
    // minlength:[1,'Minimun length for the fridge name is 1 characters.']
  },
  type: {
    type: String,
    // required: [true, 'A resource type is required']
  },
  org: {
    type: String,
  },
  start_date: {
    type: Date,
  },
  google_maps: {
    type: String
  },
  // fix this later?
  coords: {
    type: String,
  },
  st_add: {
    type: String,
    // required: [true, 'The street address is required.'],
    // minlength:[2,'Minimun length for the street address is 2 characters.']
  },
  city: {
    type: String,
    // required: [true, 'The city is required.'],
    // minlength:[2,'Minimun length for the city is 2 characters.']
  },
  state: {
    type: String,
    // required: [true, 'The state is required.'],
    // minlength:[2,'Minimun length for the state is 2 characters.']
  },
  county: {
    type: String,
  },
  zip: {
    type: Number,
    // required: [true, 'The zip code is required.'],
    // minlength:[5,'Minimun length for the zip code is 5 characters.']
  },
  country: {
    type: String,
    // required: [true, 'The country is required.'],
    // minlength:[2,'Minimun length for the country is 2 characters.']
  },
  loc_desc: {
    type: String,
  },
  opn_hrs: {
    type: Boolean,
    // required: [true, 'This is required.']
  },
  days: {
    type: String,
  },
  hrs: {
    type: String,
  },
  web: {
    type: String,
  },
  email: {
    type: String,
  },
  facebook: {
    type: String,
  },
  insta: {
    type: String,
  },
  linktree: {
    type: String,
  },
  frz: {
    type: Boolean,
  },
  pantry: {
    type: Boolean,
  },
  // accpts: {
  //   type: String
  // },
  // no_accpt: {
  //   type: String
  // },
  dtls: {
    type: String
  },
  img: {
    type: String
  },
  approved: {
    type: Boolean
  }
});

const Resource = mongoose.model('resources', resourceSchema);

module.exports = Resource;