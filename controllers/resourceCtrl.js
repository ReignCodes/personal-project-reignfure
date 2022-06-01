const resource = require('../models/resourceModel');

module.exports = {
  createVolunteer: (req,res) => {
      const {

      }
  },
  createResource: (req, res) => {
      const {name, type, org, start_date, google_maps, coords, st_add, city, state, county, zip, country, loc_desc, opnHrs, hrs, days, web, email, facebook, insta, linktree, frz, pantry, donations, accpt, no_accpt, dtls, img} = req.body;
      const newResource = new ({
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
        opnHrs: opnHrs,
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
        accpt: accpt,
        no_accpt: no_accpt,
        dtls: dtls,
        img: img
      });

      newResource.save();
      if (name != "") {
          res.redirect("/adminConsole"); 
      } else {
          res.redirect("/adminConsole/createResource");
      };
  }