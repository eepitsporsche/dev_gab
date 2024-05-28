//Handlebars Helpers

module.exports = {
  //Date Format: MM/DD/YYYY
  format_date: (date) => {
      return date.toLocaleDateString();
  },
};