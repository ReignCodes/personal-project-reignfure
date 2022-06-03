require('dotenv').config();
const express = require('express');
const response = require('express/lib/response');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
const passport = require('passport');
const routes = require('./routes/indexRouter');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('combined'));
app.use(methodOverride('_method'));
app.use(routes);

require('./config/connection');



app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
});