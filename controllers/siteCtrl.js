const siteData = require('../data/data');

module.exports = {
    index: (req, res) => {
        res.render('pages/index');   
    },

    about: (req, res) => {
        res.render('pages/about');    
    },

    contact: (req, res) => {
        res.render('pages/contact')
    },

    fridgesAll: (req, res) => {
        res.render('pages/fridgesAll')
    },

    login: (req, res) => {
    res.render('pages/login');    
    }
}