const db = require("./db");

db.define('Place', {
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
db.define('Hotel', {
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
db.define('Activty', {
  name: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.STRING
  }
});
db.define('Restaurant', {
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

module.exports = db;
