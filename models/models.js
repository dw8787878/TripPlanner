const db = require("./db");
const Sequelize = require('sequelize');


var Place = db.define('Place', {
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT)
  }
});


var Hotel = db.define('Hotel', {
  name: {
    type: Sequelize.STRING
  },
  num_stars: {
    type: Sequelize.FLOAT
  },
  amenities: {
    type: Sequelize.STRING
  }
});
var Activity = db.define('Activty', {
  name: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.STRING
  }
});
var Restaurant = db.define('Restaurant', {
  name: {
    type: Sequelize.STRING
  },
  cuisine: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER
  }
});

module.exports = {
  db: db,
  Restaurant: Restaurant,
  Hotel: Hotel,
  Activity: Activity,
  Place: Place
}
