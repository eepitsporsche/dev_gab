//Import Sequelize and Database Connection
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


//Bcrypt Password Verfication Method
class User extends Model{
    checkPassword(loginPassword) {
    return bcrypt.compareSync(loginPassword, this.password);
    }
}

//User Table
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.string,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.string,
            allowNull:false,
            validate: {
                len: [8],
            },
        },
    },

    //Password Hash Hooks
    {
    hooks: {
        beforeCreate: async (newUserData) => {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
        beforeUpdate:  async (updatedUserData) => {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        },
    },
    
        sequalize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;