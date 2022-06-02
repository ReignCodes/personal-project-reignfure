const resource = require('../models/resourceModel');

module.exports = {
    admin: (req, res) => {
        if(req.isAuthenticated()){
        resource.find({}, (error, allResources) => {
            if(error) {
                return error;
            } else {
                res.render('pages/adminConsole', {
                    resources: allResources,
                });    
            }
        }),
        contact.find({}, (error, allContacts) => {
            if(error) {
                return error;
            } else {
                res.render('pages/adminConsole', {
                    resources: allResources,
                });    
            }
        })
      } else {
      res.redirect('/login')
      }
    },

    create_resource: (req, res) => {
      if (req.isAuthenticated()) {
        res.render('pages/createResourceForm');    
      } else {
        res.redirect('/login');
      }
    },

    update_resource: (req, res) => {
      if(req.isAuthenticated()){
        const { _id } = req.params;
        resource.findOne({_id: _id}, (error, foundResource) => {
            if(error) {
                return error; 
            } else {
                res.render('pages/update', {
                    foundResource: foundResource
                });
            }
        });
      } else {
      res.redirect('/login');
      }
    }
}