var mongoose = require("mongoose")
var schema = mongoose.Schema();

var articleSchema = new schema({
    title:String,
    detail:String,
    numOfLines: Number,
})