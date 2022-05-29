const fridge = require('../models/fridgeModel');

module.exports = {
  create: (req, res) => {
      const {name, type, organization, start_date, street_address, city, state, county, zip, country, loc_description, openHours, hours, days, website, email, description, image} = req.body;
      const newResource = new ({
        name: name,
        type: type,
        organization: organization,
        start_date: start_date,
        street_address: street_address,
        city: city,
        state: state,
        county: county,
        zip: zip,
        country: country,
        loc_description: loc_description,
        openHours: openHours,
        hours: hours,
        days: days,
        website: website,
        email: email,
        description: description,
        image: image
      });
      newResources.save();
      if (title != "") {
          res.redirect("/admin-console"); 
      } else {
          res.redirect("/admin-console/create-comic");
      } 
    }