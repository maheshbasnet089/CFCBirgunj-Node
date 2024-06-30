const express = require("express")
const app = express()

app.get('/',(req,res)=>{
    res.send("This is test page")
})



app.listen(4000,()=>{
    console.log("Project has started at port 3000")
})




