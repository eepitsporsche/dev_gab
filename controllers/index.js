//Import Dependencies
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

//Middleware
router.use('./api', apiRoutes);
router.use('/',homeRoutes);

module.exports = router;