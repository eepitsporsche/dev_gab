//Dependencies
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const path = require('path');
const routes = require('./controllers');
const helpers = require('./utils');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session-Store);

const app = express();
const PORT = process.env.PORT || 3001;

//Handlebars.JS Engine Helpers
const hbs = exhbs.create({ helpers });

//Cookies/Session Set-Up
const sess = {
    secret: 'SECRET STUFF',
    cookie: {
        maxAge: 1200000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequalizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));

//Handlebars.js Middleware
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Parse JSON Data Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

//Initiate Server Connection
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening on Port ${PORT}.`));
});