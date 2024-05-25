//Import Dependencies
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes')

//Middleware
router.use('/',homeRoutes);
router.use('/api', apiRoutes);
router.use('/blogDashboard', dashboardRoutes);

module.exports = router;