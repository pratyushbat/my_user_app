const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
// router.get('', (req, res) => {
//    res.render('index',{title: 'Home page title'})
//  // res.json({name:"Ayanssh"})
// });
router.get('/apis/users', (req, res) => {
  res.json({name:"Ayanssh"})
});

require('../models/users');
//var User = require('./../models/user.js');
const User = mongoose.model("User");
router.post('/apis/user/register', async (req, res) => {
  const { name,email,phone } = req.body;
  try {
    await User.create({
      name,
      email,
      phone
    });
    res.send({status:"oK"})
  }
  catch (error) {
    res.send({ status: "Something went wrong trying" })
  }
});

router.get('/', (req, res,next) => {
  res.json({name:"New"})
});



module.exports = router;