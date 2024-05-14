//Required Modules
const BlogPost = require('./blogPost');
const User = require('./user');
const Comments = require('./comments');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');


//Model Associations
User.hasMany(BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

BlogPost.belongsTo(User, {
    foreignKey: 'user_id',
});

Comments.belongsTo(User, {
    foreignKey: 'user_id',
});

Comments.belongsTo(BlogPost, {
    foreignKey: 'blogPost_id',
    onDelete: 'CASCADE',
});

BlogPost.hasMany(Comments, {
    foreignKey: 'blogPost_id',
    onDelete: 'CASCADE',
});

module.exports = { BlogPost, User, Comments };