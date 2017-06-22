const db = require("./db");
const Sequelize = require('sequelize');
var Hotel = require("./models.js").Hotel;
var Place = require("./models.js").Place;
var Activity = require("./models.js").Activity;
var Restaurant = require("./models.js").Restaurant;
// Require your models
// Make associations etc

Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);


module.exports = {
  db
};
