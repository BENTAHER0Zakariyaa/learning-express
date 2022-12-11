const express = require("express")
const app = express()
app.set("view engine",'ejs')
app.set(express.static("image"))





const blog = [
    {
        
        id : 1 ,
        title : 'create file',
        content : 'you need creade new file first',
        image : __dirname+'/image/1.png' ,
        createdAt : '16.09.12',
        author : 'admin',
                 
    },
    {
        
        id : 2 ,
        title : 'uploade  file',
        content : 'you need uploade new file first',
        image : __dirname+'/image/1.png' ,
        createdAt : '16.09.12',
        author : 'admin',
                 
    }
]

app.get('/',function(req,res){
    res.render("index",{
        title:"younes",
        blog : blog
    })
})

app.listen(3000)