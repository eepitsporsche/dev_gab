//Import Post Model
const { Post } = require("../models");

//Seed Data Array
const postData = [
  {
    title: "Avoiding Unnecessary Re-renders: Common Mistakes in React Applications",
    content: "React is renowned for its performance, but as developers, it’s crucial to be mindful of potential pitfalls that can lead to unnecessary re-renders. In this blog post, we’ll explore common mistakes that can impact the efficiency of your React applications and discuss strategies to mitigate them...",
    date_created: "Dec 14, 2023",
    user_id: 1,
  },
  {
    title: "Advice From a Software Engineer With 8 Years of Experience",
    content: "Practical tips for those who want to advance in their careers...",
    date_created: "Mar 14, 2023",
    user_id: 2,
  },
  {
    title: "How to Remove the Last Character from a String in JavaScript",
    content: "Have you ever wondered how to remove the last character from a string in JavaScript? If you are a web developer, you may have encountered this problem many times, especially when you are working with user input, data processing, or string manipulation. Removing the last character from a string can be tricky, as there are different methods and scenarios to consider...",
    date_created: "Feb 14, 2024",
    user_id: 3,
  }
];

//Seed Post Table with bulkCreate Method
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
