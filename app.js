const express = require("express")
const { blogs } = require("./model/index")
const app = express()



require('./model/index')
app.set('view engine','ejs')
app.use(express.urlencoded({extended : true}))

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


app.get("/createblog",(req,res)=>{
    res.render("blog/createBlog")
})

app.post("/createblog",async (req,res)=>{
    const {title,subtitle,description} = req.body 
   await blogs.create({
        title : title,
        subtitle : subtitle , 
        description : description
    })
    res.send("Blog created successfully")
})




const PORT = 3000
app.listen(PORT,()=>{
    console.log("Project has started at port" + PORT)
})




function add(){
    console.log(1+2)
}

 
class Test{
}

