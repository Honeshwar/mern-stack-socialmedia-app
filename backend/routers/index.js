const route = require("express").Router();

route.use("/api/users",require('./users.js'))
route.use("/api/auth",require('./auth.js'))
module.exports = route;