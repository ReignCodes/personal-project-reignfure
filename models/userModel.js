const mongoose = require('mongoose');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const {Schema} = mongoose;
const findOrCreate = require('mongoose-findorcreate');

const userSchema = new Schema({
    username: {
      type: String,
    },
    password: {
      type: String,
    }
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
  
module.exports = User;