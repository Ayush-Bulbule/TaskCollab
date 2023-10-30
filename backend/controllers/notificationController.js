const notificationModel = require("../models/notificationModel");



class NotificationController {
    async getNotifications(req, res) {
        const userId = req.user.userId;

        if (!userId) {
            return req.status(401).json({ msg: "Login to send or recove notifications" })
        }

        try {
            const notifications = await notificationModel.getUserNotifications(userId);
            console.log(notifications);
            return res.status(200).send({ msg: "Notifications Fetched!", notifications: notifications })
        } catch (err) {
            console.log("ERROR", err);
            return res.status(500).json({ msg: 'Something went wrong!' })
        }
    }
}


module.exports = new NotificationController();