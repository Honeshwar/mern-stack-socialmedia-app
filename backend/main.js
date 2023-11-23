const express = require("express");
const app = express();
const port = 8000;

app.get('/',(req,res)=>{
    res.status(200);
    return res.json({
        "message":"hi",
        data:[]
    })
})
app.listen(port,(error)=>{
    if(error)console.log(error)
    console.log("Server running on port 8000")
})