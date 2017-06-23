const db = require("./db");
const Sequelize = require('sequelize');

var models = require("./models.js");
var Hotel = require("./models.js").Hotel;
var Place = models.Place;
var Activity = models.Activity;
var Restaurant = models.Restaurant;
// Require your models
// Make associations etc

Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);


module.exports = {
  db
};
