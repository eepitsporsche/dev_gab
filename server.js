//Import Modules and Dependencies
const express = require("express");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const routes = require("./controllers");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");
// const hbs = exphbs.create({ helpers });

//Handlebars.JS Engine Helpers
const hbs = exphbs.create({ helpers: require("./utils/helpers") });

//Create Express App and Assign Port
const app = express();
const PORT = process.env.PORT || 3001;

//Cookies/Session Set-Up
const sess = {
    secret: process.env.SECRET,
    cookie: {
        maxAge: 1200000,
        httpOnly: true,
        secure: false,
        sameSite: "strict",
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

//Session Middleware
app.use(session(sess));

//Parse JSON Data and URL-Encoded Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Serve Static Files from Public Directory
app.use(express.static("public"));

//Handlebars.js Middleware
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//Session Middleware for Different Session Object
app.use(
    session({
        secret: process.env.SECRET,
        store: new SequelizeStore({ db: sequelize }),
        resave: false,
        saveUninitialized: false,
    })
);

//Use Routes from Controller
app.use(routes);

//Initiate Server Connection
sequelize.sync({ alter: true }).then(() => {
    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}.`));
});