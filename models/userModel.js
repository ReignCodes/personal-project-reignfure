const mongoose = require('mongoose');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const {Schema} = mongoose;
// I dont need this bc I dont want to use google oauth, right?
// const findOrCreate = require('mongoose-findorcreate');

const userSchema = new Schema({
    username: {
      type: String,
    },
    password: {
      type: String,
    }
});

userSchema.plugin(passportLocalMongoose);
//SAME? userSchema.plugin(findOrCreate);

const User = mongoose.model('User', userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      cb(null, { id: user.id, username: user.username, name: user.displayName });
    });
  });
  
  passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });
  
  module.exports = User;