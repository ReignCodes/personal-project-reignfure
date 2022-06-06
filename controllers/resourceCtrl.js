const Resource = require('../models/resourceModel');

module.exports = {

    all_fridges: (req, res) => {
    Resource.find({type: "Fridge & Pantry"}, (error, allResources) => {
        if(error) {
            return error;
        } else {
            res.render('pages/allFridges', {
                resources: allResources
            });    
        }
    });
    },

    all_meals: (req, res) => {
        Resource.find({type: "Prepared Meal Pick-up" && "Sit-down warm meal"}, {approved: true}, (error, allResources) => {
            if(error) {
                return error;
            } else {
                res.render('pages/allFridges', {
                    resources: allResources
                });    
            }
        });
        },

    all_shelters: (req, res) => {
        Resource.find({type: "Warming Center" || "Shelter"}, {approved: true}, (error, allResources) => {
            if(error) {
                return error;
            } else {
                res.render('pages/allFridges', {
                    resources: allResources
                });    
            }
        });
        },

    // How do I grab these if I only want to grab based on approved key:value?
    resource_detail: (req, res) => {
        const {_id} = req.params;
        Resource.findOne({_id: _id}, (error, foundResource) => {
        if(error) {
            return error;
        } else {
            res.render('pages/resourceDetail', {
            comic: foundResource
            })
        }});
    },

    submit_resource_get: (req, res) => {
        res.render('pages/submitResourceForm')
    },

    submit_resource_post: (req, res) => {
        const {name, type, org, start_date, google_maps, coords, st_add, city, state, county, zip, country, loc_desc, opn_hrs, hrs, days, web, email, facebook, insta, linktree, frz, pantry, donations, accpts, no_accpt, dtls, img, approved} = req.body;
        console.log(req.body);
        const newResource = new Resource({
            name: name,
            type: type,
            org: org,
            start_date: start_date,
            google_maps: google_maps,
            coords: coords,
            st_add: st_add,
            city: city,
            state: state,
            county: county,
            zip: zip,
            county: county,
            country: country,
            loc_desc: loc_desc,
            opn_hrs: opn_hrs,
            days: days,
            hrs: hrs,
            web: web,
            email: email,
            facebook: facebook,
            insta: insta,
            linktree: linktree,
            frz: frz,
            pantry: pantry,
            donations: donations,
            accpts: accpts,
            no_accpt: no_accpt,
            dtls: dtls,
            img: img,
            approved: approved
        });

        newResource.save();
        if (name != "") {
            res.redirect("/"); 
        } else {
            res.redirect("/resource");
        };
    },

    submit_resource_put: (req, res) => {
        const {_id} = req.params;
        const {name, type, org, start_date, google_maps, coords, st_add, city, state, county, zip, country, loc_desc, opn_hrs, days, hrs, web, email, facebook, insta, linktree, frz, pantry, donations, accpts, no_accpt, dtls, img} = req.body;
        Resource.findByIdAndUpdate(_id, {$set:{
          name: name,
          type: type,
          org: org,
          start_date: start_date,
          google_maps: google_maps,
          coords: coords,
          st_add: st_add,
          city: city,
          state: state,
          county: county,
          zip: zip,
          country: country,
          loc_desc: loc_desc,
          opn_hrs: opn_hrs,
          days: days,
          hrs: hrs,
          web: web,
          email: email,
          facebook: facebook,
          insta: insta,
          linktree: linktree,
          frz: frz,
          pantry: pantry,
          donations: donations,
          accpts: accpts,
          no_accpt: no_accpt,
          dtls: dtls,
          img: img
        }}, {new: true}, error => {
            if(error) {
                return error;
            } else {
                res.redirect("/adminConsole");
            }
        })
    },

    delete_resource: (req, res) => {
        const {_id} = req.params;
        Resource.deleteOne({_id: _id}, error => {
          if(error) {
            return error;
          } else {
            res.redirect("/adminConsole/resourceData")
          }
        });
      }
} 

