const express=require ('express')
const router =express.Router()
const mongoose = require('mongoose')
const controller =require('../controllers/userController.js')

router.post('/register',controller.register)
router.post('/login',controller.login);

module.exports = router;