//Import User Model
const { User } = require("../models");

//Seed Data Array
const userData = [
  {
    name: "JohnSmith",
    email: "johnsmith@test.com",
    password: "thisisapassword",
    id: 1,
  },
  {
    name: "JaneDoe",
    email: "janedoe@test.com",
    password: "thisisapassword",
    id: 2,
  },
  {
    name: "Charlie Day",
    email: "herskorn@gmail.com",
    password: "paddyspub",
    id: 3,
  }
];

//Seed User Table with bulkCreate Method
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
