var mongoose = require("mongoose");

var schema = mongoose.Schema;

var userSchema = new schema({
    name:String,
    email:{type:String,lowercase:true},
    age:{type:Number,default:0}
})