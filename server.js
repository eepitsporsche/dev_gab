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