const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/users', UserController.getAllUsers);
// Add more routes as needed

module.exports = router;

