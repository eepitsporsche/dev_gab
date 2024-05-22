//Blog Post CRUD Routes

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
router.get('edit/:id', async (req, res) => {
    try {
        const blogPostData = await BlogPost.findByPk(req.params.id, {
            attributes: [
                'id',
                'title',
                'description',
                'date_created',
            ],
            //Connect User and Comment Data to Blog Post Data
            include: [
                {
                    model: Comments,
                        attributes: [
                            'id',
                            'comments_body',
                            'date_created',
                            'user_id',
                            'blogPost_id',
                        ],
                        include: {
                            model: User,
                            attributes: ['name'],
                        },
                    },
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        if (blogPostData) {
            const blogPost = blogPostData.get({ plain: true });

            res.render('editBlogPost', {
                blogPost,
                logged_in: true
            })
            
        } else {
            res.redirect('/login')
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//Delete Blog Post Route
router.delete('/:id', userAuth, async (req, res) => {
    console.log(req.params.id);

    try {
        const blogPostData = await BlogPost.destroy({
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
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;