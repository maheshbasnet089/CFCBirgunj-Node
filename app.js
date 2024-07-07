const express = require("express")
const { blogs } = require("./model/index")
const app = express()



require('./model/index')
app.set('view engine','ejs')
app.use(express.urlencoded({extended : true}))
// const multer = require('./middleware/multerConfig').multer 
// const storage = require("./middleware/multerConfig").storage 
const {multer,storage} = require('./middleware/multerConfig')
const upload = multer({storage : storage })

app.get('/',async (req,res)=>{
    const data = await blogs.findAll() 

    res.render('home.ejs',{blogs:data})
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

app.post("/createblog",upload.single('image'), async (req,res)=>{
    const {title,subtitle,description} = req.body 
   await blogs.create({
        title : title,
        subtitle : subtitle , 
        description : description, 
        image : req.file.filename
    })
    res.redirect('/')
})

app.get("/blog/:id",async (req,res)=>{
    const id = req.params.id
    const data = await blogs.findByPk(id)
   
    res.render("blog/singleBlog",{blog : data})
})

app.get("/deleteblog/:id",async (req,res)=>{
    const id = req.params.id
   await blogs.destroy({
        where : {
            id : id
        }
    })
    res.redirect("/")
})

app.use(express.static("./storage/"))
const PORT = 3000
app.listen(PORT,()=>{
    console.log("Project has started at port" + PORT)
})




