//User Session Authentication Middleware
const withAuth = (req, res, next) => {
    //Redirect to Login Page if User is Not Logged In
    if (!req.session.logged_in) {
      res.redirect("/login");
    } else {
      //Continue to Next Middleware/Route if User is Logged In
      next();
    }
};
  
module.exports = withAuth;