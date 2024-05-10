//Sequelize Import
const sequelize = require("../config/connection");

//Model Imports
const { BlogPost, User, Comments } = require('../models');

const blogPostData = require('./blogPostData.json');
const userData = require('./userData.json');
const commentsData = require('./commentsData.json');

//Seed Database
const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const blogPost of blogPostData) {
        await BlogPost.create({
            ...blogPost,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    const comments = await Comments.bulkCreate(commentsData);

    process.exit(0);
};

seedDatabase();