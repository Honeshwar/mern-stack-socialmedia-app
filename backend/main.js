const express = require("express");
// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
//provide to all files, if not use only dy befault main access
const configEnv = require("dotenv").config();
// Helmet helps secure Express apps by setting HTTP response headers. by default not header specify by express for http
const helmet = require("helmet");
// HTTP request logger middleware for node.js
const morgan = require("morgan");
const mongodb = require("./config/mongoose");
// CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
const cors = require("cors"); // CORS (Cross-Origin Resource Sharing):Since your frontend and backend are on different ports, you might encounter CORS issues. To solve this during development, you can use the cors middleware in your Express backend:
const app = express();
const port = process.env?.PORT;

//add db
app.use(
  cors({
    origin: "https://6lftc9-3000.csb.app",
  }),
);
// app.use(express.urlencoded());//only work for url, x-www-form-urlencoded

app.use(express.json()); //to parse req, only application/json content-type work, else use urlencoded()
app.use(helmet());
app.use(morgan("common"));
// app.use("/", (req, res) => {
//   console.log("hi", req.body);
// });
app.use("/", require("./routers"));
app.listen(port, (error) => {
  if (error) console.log(error);
  console.log("Server running on port 8000");
});
