const express = require('express')
const router = express.Router()
const User = require('../models/customerSchema');
const moment = require('moment');
const userController = require('../controllers/userController');


// Get Requests
router.get('/', userController.a)
router.get("/edit/:id", userController.b)
router.get("/user/add.html", userController.c)
router.get("/user/search.html", userController.d)
router.get("/view/:id", userController.e)

// Post Requests
router.post("/user/add.html", userController.f)

router.post("/search", userController.g)

// Delete requests
router.delete("/edit/:id", userController.h);

// Put Requests
router.put("/edit/:id", userController.i);

module.exports = router