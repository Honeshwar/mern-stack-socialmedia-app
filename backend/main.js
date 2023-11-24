const express = require("express");
// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
const configEnv = require("dotenv").config();
// Helmet helps secure Express apps by setting HTTP response headers. by default not header specify by express for http
const helmet = require('helmet');
// HTTP request logger middleware for node.js
const morgan = require('morgan');
const mongodb = require("./config/mongoose")

const app = express();
const port = process.env?.PORT;
//add db
app.use(express.json());//to parse req, only application/json content-type work, else use urlencoded()
app.use(helmet());
app.use(morgan("common"));

app.use('/',require("./routers"))
app.listen(port,(error)=>{
    if(error)console.log(error)
    console.log("Server running on port 8000")
})