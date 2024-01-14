const express = require('express');
const router = express.Router();
const userRoute=require('./user.route')


// colocar las rutas aquí
router.use(userRoute)

module.exports = router;