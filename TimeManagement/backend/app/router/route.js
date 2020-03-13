const express = require("express");
const app = express();
const timeRoute = express.Router();
const mongoose = require('mongoose');
let timeModel = require('../model/model');

// To Add New time
timeRoute.route("/addtime").post(function (req, res) {

  const time = new timeModel({
    _id: new mongoose.Types.ObjectId(),

    TimeIn: req.body.TimeIn,
    TimeOut: req.body.TimeOut,

  });

  time.save().then((result) => {
    console.log(result);
    res.status(200).json({
      time: "time Added Successfully",
    });
  })
    .catch(err => {

      res.status(400).send("Something Went Wrong");
    });
});


// To Get List Of time
timeRoute.route("/").get(function (req, res) {
  timeModel.find(function (err, time) {
    if (err) {
      console.log(err);
    } else {
      res.json(time);
    }
  });
});


// To Get time Details By time ID
timeRoute.route("/").get(function (req, res) {
  let id = req.params.id;
  timeModel.findById(id, function (err, time) {
    res.json(time);
  });
});

// Defined edit route
timeRoute.route("/edit/:id").get(function (req, res) {
  let id = req.params.id;
  timeModel.findById(id, function (err, time) {
    res.json(time);
  });
});



// To Delete The time
timeRoute.route("/delete/:id").get(function (req, res) {
  timeModel.findByIdAndRemove({ _id: req.params.id }, function (
    err,
    time
  ) {
    if (err) res.json(err);

    else res.json("time Deleted Successfully");
  });
});

module.exports = timeRoute;