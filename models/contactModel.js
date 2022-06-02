const mongoose = require('mongoose');
const {Schema} = mongoose;

const contactSchema = new Schema({
    f_name: {
        type: String,
        required: [true, 'A first name is required'],
        minlength: [1, 'the minimum lenght is 1 character']
    },
    l_name: {
        type: String,
        required: [true, 'A last name is required'],
        minlength: [2, 'the minimum lenght is 2 characters']
    },
    email: {
        type: String,
        required: [true, 'An email address is required'],
        minlength: [5, 'the minimun length is 5 characters']
    },
    org: {
        type: String
    },
    vol: {
        type: Boolean,
        required: [true, 'Yes or no is required']
    },
    msg: {
        type: String,
        required: [true, 'A message is required'],
        minlength: [10, 'the minimum length for messsage is 10 characters']
    },
    cntct: {
        type: Boolean
    },
    admin: {
        type: Boolean
    },
    username: {
        type: String
    }
});

const Contact = mongoose.model('contacts', contactSchema);

module.exports = Contact;
