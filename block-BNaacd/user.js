var mongoose = require("mongoose");

var schema = mongoose.Schema();

var userSchema = new schema({
    name:String,
    email:{lowercase:String},
    age:{default:0}
})