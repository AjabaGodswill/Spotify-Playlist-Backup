const express = require('express');
// const { body } = require('express-validator/check');

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/login', authController.login)

module.exports = router