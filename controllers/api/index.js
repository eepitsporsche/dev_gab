//Import Dependencies
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./blogPostRoutes');
const commentRoutes = require('./commentRoutes');

//Middleware Routes
router.use('/users', userRoutes);
router.use('/blogPost', blogPostRoutes);
router.user('/comments', commentRoutes);

module.export = router;