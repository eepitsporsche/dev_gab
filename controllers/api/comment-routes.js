//Import Packages and Models
const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");


//Create New Comment Route
router.post("/", withAuth, async (req, res) => {
  try {    
    // Create New Comment with Request Body Data
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    
    //Response with New Comment Data
    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// Export the router
module.exports = router;