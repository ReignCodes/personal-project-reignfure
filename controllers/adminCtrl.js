const resource = require('../models/resourceModel');
const contact = require('../models/contactModel');


module.exports = {
    admin: (req, res) => {
        res.render('pages/adminConsole')
    //     // if(req.isAuthenticated()){
    //     resource.find({}, (error, allResources) => {
    //         if(error) {
    //             return error;
    //         } else {
    //             res.render('pages/adminConsole', {
    //                 resources: allResources,
    //             });    
    //         }
    //     })
    //     // contact.find({}, (error, allContacts) => {
    //     //     if(error) {
    //     //         return error;
    //     //     } else {
    //     //         res.render('pages/adminConsole', {
    //     //             contacts: allContacts,
    //     //         });    
    //         // }
    //     // })
    // //   } else {
    // //   res.redirect('/login')
    // //   }
    },
    read_contact: (req, res) => {
        // if(req.isAuthenticated()){
            const { _id } = req.params;
            contact.findOne({_id: _id}, (error, foundContact) => {
                if(error) {
                    return error; 
                } else {
                    res.render('pages/adminReadContact', {
                        foundContact: foundContact
                    });
                }
            });
        //   } else {
        //   res.redirect('/login');
        //   }
    },


    create_resource: (req, res) => {
      if (req.isAuthenticated()) {
        res.render('pages/createResourceForm');    
      } else {
        res.redirect('/login');
      }
    },

    review_resource:  (req, res) => {
        if(req.isAuthenticated()){
            const { _id } = req.params;
            resource.findOne({_id: _id}, (error, foundResource) => {
                if(error) {
                    return error; 
                } else {
                    res.render('pages/adminReviewResource', {
                        foundResourcet: foundResource
                    });
                }
            });
        } else {
        res.redirect('/login');
        }
    },
}