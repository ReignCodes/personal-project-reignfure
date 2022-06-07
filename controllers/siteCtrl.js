const User = require('../models/userModel');
const passport = require('passport');

module.exports = {
    index: (req, res) => {
        res.render('pages/index');   
    },

    about: (req, res) => {
        res.render('pages/about');    
    },

    thank_you: (req, res) => {
        res.render('pages/thankYou');
    },

    login: (req, res) => {
        res.render('pages/login');    
    },
        
    login_post: (req, res) => {
        const {username, password} = req.body;
        const user = new User({
            username: username,
            password: password
        });
        req.login(user, (error) => {
            if (error) {
                console.log(error);
                res.redirect('/login');
            } else {
                passport.authenticate('local')(req, res, () => {
                    res.redirect('/adminConsole');
                })
            }
        });
    },

    logout:(req, res) => {
        req.logout(function(error) {
            if(error) {
                return error
            } else {
                res.redirect('/');
            }
        });
    }  
}