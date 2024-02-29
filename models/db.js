const mongoose = require('mongoose')// mongoose is a module on which i can connect mongodb
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO,{
    useNewUrlParser:true
},(err)=>{
if(!err)
console.log("Database connected")
else
console.log("Problem in connection :"+err)
});

require('./todo.model')// means on this database the table was created