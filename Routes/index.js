// routes/index.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController');

// Define routes
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.get('/posts', postController.getAllPosts);
router.post('/posts', postController.createPost);
router.get('/comments', commentController.getAllComments);
router.post('/comments', commentController.createComment);

module.exports = router;
