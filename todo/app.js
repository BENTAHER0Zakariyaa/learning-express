const express = require('express')
const app = express();

app.set('view engine', 'ejs');

const todoList = [
    {
        id : 1,
        text : 'Create todo list website',
        status : false
    },
    {
        id : 2,
        text : 'Create todo card design',
        status : true
    },
]

app.get('/', function (req, res){

    res.render('index', {
        title : 'Home page',
        todoList : todoList
    })
});

app.listen(4000);

// list 
// add
// delete
// update
// done

// blod 
// [
//     {
//         id : ,
//         title : ,
//         content :,
//         image : ,
//         createdAt :,
//         author :,
//     }, 
//     {
//         id : ,
//         title :,
//         content :,
//         image : ,
//         createdAt :,
//         author :,
//     }, 
// ]