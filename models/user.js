const mongoose =  require ("mongoose")
const { applyTimestamps } = require("./url")

const  userScheme = new mongoose.Schema({
    name : {
        type : String,
         required : true,
    },

     email : {
        type : String,
        required : true,
        unique : true,
    },
     
    role : {
        type : String,
        required : true,
        default : "NORMAL"
    },

     password : {
        type : String,
        required : true ,
     },
},{Timestamps : true})

const User = mongoose.model('user' ,userScheme)

module.exports = User ;