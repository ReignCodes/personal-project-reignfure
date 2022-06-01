// const { link } = require('fs');
const mongoose = require('mongoose');
const {Schema} = mongoose;

const resourceSchema = new Schema({
  name: {
    type: String,
    required: [true, 'A fridge name is required.'],
    minlength:[1,'Minimun length for the fridge name is 1 characters.']
  },
  type: {
    type: String,
    required: [true, 'A resource type is required']
  },
  organization: {
    type: String,
    required: [true, 'An organization name is required.'],
    minlength:[1,'Minimun length for the organization name is 1 character.']
  },
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
  state: {
    type: String,
    required: [true, 'The state is required.'],
    minlength:[4,'Minimun length for the state is 4 characters.']
  },
  zip: {
    type: Location,
    required: [true, 'The zip code is required.'],
    minlength:[5,'Minimun length for the zip code is 5 characters.']
  },
  county: {
    type: String,
  },
  country: {
    type: String,
    required: [true, 'The country is required.'],
    minlength:[3,'Minimun length for the country is 2 characters.']
  },
  loc_description: {
    type: String,
    required: [true, 'The country is required.'],
    minlength:[3,'Minimun length for the country is 2 characters.']
  },
  open_hours: {
    type: Boolean,
    required: [true, 'This is required.']
  },
  hours: {
    type: TimeRanges,
    required: [true, 'Open hours are required']
  },
  days: {
    type: Array,
  },
  start_date: {
    type: Date,
  },
  freezer: {
    type: Boolean,
    required: [true, 'this is required'],
  },
  dry_pantry: {
    type: Boolean,
    required: [true, 'this is required']
  },
  accept: {
    type: Array
  },
  not_accept: {
    type: Array
  },
  details: {
    type: String
  },
  image: {
    type: File
  },
});

const Resource = mongoose.model('resources', resourceSchema);

module.exports = Resource;