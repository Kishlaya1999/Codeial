const express = require('express');
const router =express.Router();

const usersController = require('../controllers/users_controller');
const postsController = require('../controllers/posts_controller');


router.get('/profile',usersController.profile);
router.get('/posts',postsController.posts);
router.get('/signUp',usersController.signUp)
router.get('/signIn',usersController.signIn)


module.exports = router;