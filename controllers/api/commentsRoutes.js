//Comment Model CRUD Routes

const router = require('express').Router();
const { BlogPost, Comments, User } = require('../../models');


//Create Comment Route
router.post('/', async (req, res) => {
    try {
        console.log('Success!');
        const comments = await Comments.create({
            comments_body: req.body.comments_body,
            blogPost_id: req.body.blogPost_id,
            user_id: req.session.user_id || req.body.user_id,
        });

        res.status(200).json(comments);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//Get All Comments Route
router.post('/', async (req, res) => {
    try {
        const commentsData = await Comments.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: BlogPost,
                    attributes: ['id'],
                },
            ],
        });

        res.status(200).json(commentsData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//Update a Comment Route
router.put('/:id', async (req, res) => {
    try {
        const commentData = await Comments.update({
            where: {
                id: req.params.id,
            },
        });

        if (!commentData) {
            res.status(400).json({ message: 'No comment found with that ID.' });
            return;
        }

        console.log('Comment has been updated.');
        res.status(200).json(commentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//Delete a Comment By ID Route
router.delete('/:id', async (req, res) => {
    try {
        const commentData = await Comments.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!commentData) {
            res.status(400).json({ message: 'No comment found with that ID.' });
            return;
        }

        res.status(200).json(commentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;