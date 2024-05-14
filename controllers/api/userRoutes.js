//Import Dependencies
const router = require('express').Router();
const { User } = ('../../models');


//Create New User in Database when User Creates an Account
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});


//User Login/Validation Route
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            console.log('No user account found with this email.');
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again.' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            console.log('Incorrect password.');
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again.' });
        return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'Login successful!' });
        });
        } catch (err) {
            res.status(400).json(err);
    }
});


//Logout Route
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
        res.status(204).end();
    });
    } else {
        req.status(404).end();
    }
});


module.exports = router;