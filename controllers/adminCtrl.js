const Resource = require('../models/resourceModel');
const Contact = require('../models/contactModel');


module.exports = {
    admin: (req, res) => {
        res.render('pages/adminConsole');     
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
      if (req.isAuthenticated()) {
        res.render('pages/createResourceForm');    
      } else {
        res.redirect('/login');
      }
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

    // approve_resource:  (req, res) => {
    //     const { _id } = req.params;
    //     Resource.findOne({_id: _id}, (error, foundResource) => {
    //         if(error) {
    //             return error; 
    //         } else {
    //             res.render('pages/adminReviewResource', {
    //                 foundResource: foundResource
    //             });
    //         }
    //     });
    // },


}