const express = require("express");
const authRouter = require("./authRoutes");
const projectRoutes = require("./projectRoutes");
const taskRoutes = require("./taskRoutes");
const notificationRoustes = require('../models/notificationModel')

const router = express.Router();

//Register Route
router.use("/auth", authRouter);

// Project Routes
router.use("/project", projectRoutes);

// Tasks Routes
router.use("/task", taskRoutes);

//Notificcations
router.use('/get', notifica)

module.exports = router;
