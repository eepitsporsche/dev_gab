//Import Dependencies
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./blogPostRoutes');
const commentRoutes = require('./commentsRoutes');

//Middleware Routes
router.use('/users', userRoutes);
router.use('/blogPost', blogPostRoutes);
router.use('/comments', commentRoutes);
router.use('/create', blogPostRoutes);

module.exports = router;