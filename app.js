const express = require("express")
const app = express()

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    const data = ['cfcbirgung','cfckoshi']
    res.render('home.ejs',{name : data})
})
-
app.get("/blog",(req,res)=>{
    res.render('blog')
})

app.get("/register",(req,res)=>{
    res.render('authentication/register')
})

app.get("/login",(req,res)=>{
    res.render('authentication/login')
})





const PORT = 3000
app.listen(PORT,()=>{
    console.log("Project has started at port" + PORT)
})




