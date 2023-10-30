const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const notificationController = require('../controllers/notificationController');

const router = express.Router();


router.get('/get-notifications', authMiddleware, notificationController.getNotifications);


module.exports = router;