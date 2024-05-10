//Handlebars Helpers

module.exports = {
    //Date Format: MM/DD/YYYY
    format_date: (date) => {
        return date.toLocaleDateString();
    },
    //Verify User ID
    user_auth: (userLogged, userID) => {
        return userLogged === userID;
    },
};