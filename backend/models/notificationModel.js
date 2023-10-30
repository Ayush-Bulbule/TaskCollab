const db = require("../config/db")

module.exports = {
    getUserNotifications: (userId) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM notifications where reciever_id=?', [userId],
                (err, result) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(result)
                    }
                })
        })
    },

    addNotification: (userId, recieverId, message) => {
        return new Promise('INSERT INTO notifications(sender_id, message,reciver_id) values ?,?,?',
            [userId, message, recieverId],
            (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            }
        );
    },

    

}