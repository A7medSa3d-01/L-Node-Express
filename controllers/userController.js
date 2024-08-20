const User = require('../models/customerSchema');
const moment = require('moment');



const a = (req, res) => {
  // result => البانات الي جاية من قاعدة البيانات
  User.find().then((result) => {
    res.render("index", { arr: result, moment: moment })
  }).catch((err) => {
    console.log(err)
  })
}

const b = (req, res) => {
  User.findById(req.params.id)
    .then((result) => {
      res.render("user/edit", { details: result, moment: moment })
    }).catch(
      (err) => {
        console.log(err)
      })
}

const c = (req, res) => {
  res.render("user/add")
}

const d = (req, res) => {
  res.render("user/search")
}

const e = (req, res) => {
  User.findById(req.params.id)
  .then((result) => {
    res.render("user/view", { details: result, moment: moment })
  }).catch(
    (err) => {
      console.log(err)
    })
  }
  
const f = (req, res) => {
  User.create(req.body).then(() => {
    res.redirect("/")
  }).catch(err => {
    console.log(err)
  })
}

const g = (req, res) => {
  User.find({ $or: [{ firstName: req.body.searchText.trim() }, { lastName: req.body.searchText.trim() }] }).then((result) => {
    res.render("user/search", { arr: result, moment: moment })
  }).catch(err => {
    console.log(err)
  })
}

const h = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then(() => { res.redirect("/"); })
    .catch((err) => { console.log(err) })
}

const i = (req, res) => {
  User.updateOne({ _id: req.params.id }, req.body)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
}



module.exports = {a, b, c, d, e, f, g, h, i}