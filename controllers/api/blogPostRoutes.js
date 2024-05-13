//Import Dependencies
const router = require('express').Router();
const { BlogPost } = require('../../models');
const userAuth = require('../../utils/authentication');


//Create Blog Post Route
router.post('/', userAuth, async (req, res) => {
    console.log(req.body);

    try {
        const newBlogPost = await BlogPost.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newBlogPost);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});


//Edit Blog Post Route
router.put('/:id', userAuth, async (req, res) => {
    console.log(req.body);

    try {
        const blogPostData = await BlogPost.update( req.body, {
            where: {
                id: req.params.id,
            }
        });

        //Respond with 400 Failure Status if No Blog Post Data is Found
        if (!blogPostData) {
            res.status(400).json({ message: 'No blog post found with this ID.' });
            return;
        }

        //Respond with 200 Success Status if Blog Post Data is Found
        res.status(200).json(blogPostData);
    } catch (err) {
        res.status(500).json(err);
    }
});


//Delete Blog Post Route
router.delete('/:id', userAuth, async (req, res) => {
    console.log(req.params.id);

    try {
        const blogPostData = await BlogPost.destroy( req.body, {
            where: {
                id: req.params.id,
            }
        });

        //Respond with 404 Failure Status if No Blog Post Data is Found
        if (!blogPostData) {
            res.status(400).json({ message: 'No blog post found with this ID.' });
            return;
        }

        //Respond with 200 Success Status if Blog Post Data is Found
        res.status(200).json(blogPostData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;