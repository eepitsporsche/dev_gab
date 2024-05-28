//Import Seed Data
const seedUsers = require("./userData");
const seedPosts = require("./postData");
const seedComments = require("./commentData");

//Sequelize Import
const sequelize = require("../config/connection");


//Call the Seed Functions to Seed the Database
const seedDatabase = async () => {
  //Synch Sequelize Models and Clear the Tables
  await sequelize.sync({ force: true });
  
  await seedUsers();
  await seedPosts();
  await seedComments();
  //Exit Process with Successful Exit Code
  process.exit(0);
};

seedDatabase();
