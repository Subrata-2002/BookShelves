require('./models/db')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const { response } = require('express')
const todo = mongoose.model('table_bookshelf')
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs');


const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    todo.find((err, data) => {
        // console.log(data)
        res.render('home', { data: data });
    })
})

app.post('/save', (req, res) => {           //Whenever we work in url then we have to use post method else get method
    var x = new todo(req.body)              //create a object name todo
    x.save((err, data) => {
        if (!err) {
            console.log("Data Saved")
            res.redirect('/')
        }
    })
    // console.log(req.body)
})


app.get("/edit",(req,res)=>{
    var id=req.query.id
    todo.findById(id,(err,data)=>{
        res.render('edit',{data:data})
    })  
})

app.post("/update",(req,res)=>{
    // console.log(req.body)
    todo.findByIdAndUpdate(req.body.code,{$set:req.body},{new:true},(err,data)=>{
        if(!err)
        {
            res.redirect("/")
        }
        else{
            console.log(err)
        }
    })
})

app.get("/del",(req,res)=>{
    var id=req.query.id
    todo.findByIdAndRemove(id,(err,data)=>{
        if(!err)
        {
            res.redirect("/")
        }
    })
})
app.listen(PORT, () => {
    console.log("server is running");
})