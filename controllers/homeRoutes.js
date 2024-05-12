//Import Dependencies
const router = require('express').Router();
const { BlogPost, User, Comments } = require('../models');
const userAuth = require('../utils/authentication');


//Get All Blog Posts
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
        blogPost.get({ plain:true })
    );

    //Pass Serialzed Data and Session Flag into Template
    res.render('homepage', {
        blogPosts,
        logged_in: req.session.logged_in,
    });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//Get One Blog Post
    //userAuth Middleware Prevents Access to Route
router.get('/blogPost/:id', userAuth, async (req, res) => {
    try {
        const blogPostData = await BlogPost.findByPK(req.params.id, {
            //Connect User and Comment Data to Blog Post Data
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Comments,
                    attributes: ['User'],
                },
            ],
        });

    //Serialize Data for Template to Read
    const blogPost = blogPostData.get({ plain:true });
    console.log(blogPost)

    //Render blogPost.handlebars if User is Logged in or Redirects to Login Page
    res.render('blogPost' {
    ...blogPost,
    logged_in: req.session.logged_in,
    });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
        res.redirect('/login');
    }
});