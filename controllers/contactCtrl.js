const Contact = require('../models/contactModel');
const passport = require('passport');




module.exports = {
    contact_get: (req, res) => {
        res.render('pages/contactForm');
    },

    contact_post: (req, res) => {
        const {f_name, l_name, email, org, vol, msg, cntct, admin, user_name} = req.body;
        const newContact = new Contact({
            f_name: f_name,
            l_name: l_name,
            email: email,
            org: org,
            vol: vol,
            msg: msg,
            cntct: cntct,
            admin: admin,
            user_name: user_name
        });
        newContact.save();
        if (f_name != "") {
            // // does this make sense? How would i make a think appear on the homepage that says thanks instead? Do I have to make a thank you page?
            // alert("Thank you for contacting us, we will get back to you asap!");
            res.redirect("/");
        } else {
            res.redirect("/contactForm")
        }

    },

    contact_put: (req, res) => {
        const {_id} = req.params;
        const {f_name, l_name, email, org, vol, msg, cntct, admin, user_name} = req.body;
        Contact.findByIdAndUpdate(_id, {$set:{
            f_name: f_name,
            l_name: l_name,
            email: email,
            org: org,
            vol: vol,
            msg: msg,
            cntct: cntct,
            admin: admin,
            user_name: user_name
        }}, {new: true}, error => {
            if(error) {
                return error;
            } else {
                red.redirect("/adminConsole");
            }
        });

    },

    contact_delete: (req, res) => {
        const {_id} = req.params;
        Contact.deleteOne({_id: _id}, error => {
            if(error) {
                return error;
            } else {
                res.redirect("/adminConsole")
            }
        });
    }

}