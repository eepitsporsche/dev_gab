//Import Comment Model
const { Comment } = require("../models");

//Seed Data Array
const commentData = [
  {
    comment_text: "Can't wait to try this out in React!",
    date_created: "May 07, 2024",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "I aspire to meet this level of knowledge and proficiency!",
    date_created: "May 07, 2024",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "Another JavaScript trick I can't wait to implement!",
    date_created: "May 07, 2024",
    user_id: 1,
    post_id: 3,
  }
];

//Seed Comment Table with bulkCreate Method
const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
