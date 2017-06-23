const route = require("express").Router();
const db = require("../models");

route.get("/", (req, res) => {

  var promHotel = db.Hotel.findAll({});
  var promActiv = db.Activity.findAll({});
  var promRest = db.Restaurant.findAll({});

  Promise.all([promHotel, promActiv, promRest])
    .then(function (values) {
      res.render("index.html", {
      Hotel: values[0],
      Activity: values[1],
      Restaurant: values[2]
    });
  }).catch(console.error)
});

route.post("/login", (req, res) => {
  console.log(req.body);
  res.send("ok");
});


module.exports = route;
