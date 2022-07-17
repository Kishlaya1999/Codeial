const express = require('express');
const router =express.Router();
const passport = require('passport');

const usersController = require('../controllers/users_controller');
const postsController = require('../controllers/posts_controller');


router.get('/profile',usersController.profile);
router.get('/posts',postsController.posts);
router.get('/signUp',usersController.signUp);
router.get('/signIn',usersController.signIn);

router.post('/create',usersController.create);

// use passsport as a middlewaare to authinticate
router.post('/create-session', passport.authenticate(
     'local',
     {failureRedirect: '/usre/signin'}
),usersController.createSession);


module.exports = router;