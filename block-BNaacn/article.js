var mongoose = require("mongoose")

var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title:String,
    description:String,
    tags:[String],
    createdAt:{type:Date,default:new Date()},
    like:{type:Number,default:0}
})
var Article = mongoose.model("Article",articleSchema)

module.exports = Article;

