//Import Packages and Models
const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");


//Get All Blog Posts for Homepage Route
router.get("/", async (req, res) => {
  try {
    //Find All Posts with Associated Username
    const postData = await Post.findAll({
      include: [{ model: User, attributes: ["name"] }],
      order: [['date_created', 'DESC']],
    });
    //Serialize Post Data to Plain JavaScript Object
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//Get Individual Blog Post Route
    //withAuth Middleware Prevents Unauthorized Access to Route
router.get("/post/:id", withAuth, async (req, res) => {
  try {
        //Find Post by ID with Associated Username and Associated Comments
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["name"] },
        {
          model: Comment,
          include: [{ model: User, attributes: ["name"] }],
        },
      ],
    });
    //Serialize Post Data to Plain JavaScript Object
    const post = postData.get({ plain: true });
    res.render("post", {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//Get Dashboard Blog Data Route
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: [{ model: User, attributes: ["name"] }],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("dashboard", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//Login Page Route
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});


//Signup Page Route
router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("signup");
});


//New Post Route
router.get("/newpost", (req, res) => {
  if (req.session.logged_in) {
    res.render("newpost");
    return;
  }
  res.redirect("/login");
});


//Edit Post Route
router.get("/editpost/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["name"] },
        {
          model: Comment,
          include: [{ model: User, attributes: ["name"] }],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render("editpost", {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;