//Import Dependencies
const router = require('express').Router();
const { BlogPost, User, Comments } = require('../models');
const userAuth = require('../utils/authentication');


//Get All Blog Posts Route
router.get('/', async (req, res) => {
    try {
        const blogPostData = await BlogPost.findAll({
            //Connect User and Comment Data to Blog Post Data
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Comments,
                    attributes: ['comments_body'],
                },
            ],
        });

        //Serialize Data for Template to Read
        const blogPosts = blogPostData.map((blogPost) => 
        blogPost.get({ plain: true })
        );

        //Pass Serialzed Data and Session Flag into Template to Render homepage.handlebars
        res.render('homepage', {
            blogPosts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//Get One Blog Post Route
    //userAuth Middleware Prevents Access to Route
router.get('/blogPost/:id', userAuth, async (req, res) => {
    try {
        const blogPostData = await BlogPost.findByPk(req.params.id, {
            //Connect User and Comment Data to Blog Post Data
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Comments,
                    attributes: [User],
                },
            ],
        });

        //Serialize Data for Template to Read
        const blogPost = blogPostData.get({ plain: true });
        console.log(blogPost)

        //Render blogPost.handlebars if User is Logged in or Redirect to Login Page
        res.render('blogPost', {
        ...blogPost,
        logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
        res.redirect('/login');
    }
});


//Get Dashboard Blog Data Route
    //userAuth Middleware Prevents Access to Route
router.get('/blogDashboard', userAuth, async (req, res) => {
    try {
        //Find User By Session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [
                {
                    model: BlogPost,
                    include: [User],
                },
                {
                    model: Comments,
                },
            ],
        });

        //Serialize Data for Template to Read
        const user = userData.get({ plain: true });

        //Render blogDashboard.handlebars if User is Logged In
        res.render('blogDashboard', {
            ...user,
            logged_in: true,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//Create New Blog Post Route
router.get('/createPost', async (req, res) => {
    try {
        //Render createPost.handlebars if User is Logged In or Redirect to Login Page
        if (req.session.logged_in) {
            res.render('createPost', {
                logged_in: req.session.logged_in,
                userId: req.session.user_id,
            });
            return;
        } else {
            res.redirect('/login');
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//Edit Blog Post Route
router.get('createPost/:id', async (req, res) => {
    try {
        const blogPostData = await BlogPost.findByPk(req.params.id, {
            //Connect User and Comment Data to Blog Post Data
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Comments,
                    include: [User],
                },
            ],
        });

        const blogPost = blogPostData.get({ plain: true });
        console.log(blogPost);

        if(req.session.logged_in) {
            res.render('editBlogPost', {
                ...blogPost,
                logged_in: req.session.logged_in,
                userId: req.session.user_id,
            });
            return;
        } else {
            res.redirect('/login')
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//Login Route
router.all('/login', (req, res) => {
    //Redirect to Dashboard if User is Logged In
    if (req.session.logged_in) {
        res.redirect('blogDashboard');
        return;
    }

    //Redirect to Login Page if User is Not Logged In
    res.render('login');
});


module.exports = router;