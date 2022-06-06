const Resource = require('../models/resourceModel');
const Contact = require('../models/contactModel');
const User = require('../models/userModel');
const passport = require('passport');


module.exports = {
    admin: (req, res) => {
        res.render('pages/adminConsole');     
    },

    register_get: (req, res) => {
        res.render('pages/register');
    },

    register_post: (req, res) => {
        const {username,password} = req.body;
        User.register({username: username}, password, (error, user) => {
            if (error) {
                console.log(error);
                res.redirect('/adminConsole/register');
            } else {
                passport.authenticate('local')(req, res, () => {
                    res.redirect('/login');
                });
            }
        });
    },

    resource_data: (req, res) => {
        Resource.find({}, (error, allResources) => {
            if(error) {
                return error;
            } else {
                res.render('pages/resourceData', {
                    resources: allResources
                });    
            }
        });
    },

    contact_inbox: (req, res) => {
        Contact.find({}, (error, allContacts) => {
            if(error) {
                return error;
            } else {
                console.log(allContacts);
                res.render('pages/contactInbox', {
                    contacts: allContacts
                });    
            }
        });
    },
    
    read_contact: (req, res) => {
        const { _id } = req.params;
        Contact.findOne({_id: _id}, (error, foundContact) => {
             if(error) {
                return error; 
            } else {
                res.render('pages/adminReadContact', {
                    foundContact: foundContact
                });
            }
        });
    },

    create_resource: (req, res) => {
        res.render('pages/createResourceForm'); 
    },

    review_resource:  (req, res) => {
        const { _id } = req.params;
        Resource.findOne({_id: _id}, (error, foundResource) => {
            if(error) {
                    return error; 
            } else {
                res.render('pages/adminReviewResource', {
                        foundResource: foundResource
                    });
            }
            });
    },
}