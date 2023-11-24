const mongoose = require("mongoose");

const db = mongoose.connect(`mongodb+srv://Honeshwar:${process.env.MONGODB_PASSWORD}@cluster0.o5zojlu.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
    console.log("Database is connected")
},(E)=>{
    console.error("Error: Database is not connecting \n",E)
})
//mongodb://dn
module.exports = db;