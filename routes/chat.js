const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware.js');
const chatController = require('../controllers/chat');

router.get('/inbox', isLoggedIn, chatController.getInbox);
router.get('/chat/:listingId/:hostId', isLoggedIn, chatController.getChat);
router.post('/chat/:listingId/:hostId/send', isLoggedIn, chatController.sendMessage);


module.exports = router;