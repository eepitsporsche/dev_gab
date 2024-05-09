//Authentication Middleware
const auth = (req, res, next) => {
    console.log(req.session.logged_in);

    //Redirect to Login Page if User is Not Logged In
    if(!req.session.logged_in) {
        res.redirect("/login");
    } else {
        next();
    }
}

module.exports = auth;