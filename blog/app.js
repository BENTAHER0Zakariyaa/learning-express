const express = require("express")
const app = express()

app.set("view engine",'ejs')
app.use('/img', express.static("public/image"))
app.use('/css', express.static("public/css"))

app.use(express.urlencoded())

let blogs = [
    {
        id : 1 ,
        title : 'create file',
        content : 'you need creade new file first',
        image : '1.png' ,
        createdAt : '16.09.12',
        author : 'admin',          
    },
    {
        id : 2 ,
        title : 'uploade  file',
        content : 'you need uploade new file first',
        image : '1.png' ,
        createdAt : '16.09.12',
        author : 'admin',           
    }
]

app.get('/',function(req,res){
    res.render("index",{
        title:"younes",
        blogs : blogs
    })
})

app.get("/addBlog", function(req, res){
    res.render('blog/addBlog')
})

app.post("/addBlog", function(req, res){
    const { title, content } = req.body

    const newBlog = {
        id : blogs.length + 1,
        title : title,
        content : content,
        image : '1.png',
        createdAt : Date.now().toLocaleString(),
        author : "Admin"
    }

    blogs.push(newBlog)

    res.redirect('/')
})

app.get('/deleteBlog/:idBlog', function(req,res){
   const { idBlog } = req.params

   let newBlogsArray = []

   blogs.forEach(blog => {
    if (blog.id != idBlog) {
        newBlogsArray.push(blog)
    }
   });

   blogs = newBlogsArray;

   res.redirect('/')
})


app.listen(3000)