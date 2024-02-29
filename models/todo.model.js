const mongoose= require('mongoose')
var todoSchema = new mongoose.Schema({//Schema means table structure
    sub:String,
    desc:String
})
mongoose.model('table_bookshelf',todoSchema);