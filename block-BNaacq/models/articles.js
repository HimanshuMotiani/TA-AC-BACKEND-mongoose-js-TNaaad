var mongoose = require("mongoose")

var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title:String,
    description:String,
    tags:[String],
    likes:Number,
    author:Schema.Types.ObjectId,
    comments:[String]
},{timestamps:true})

var Article = mongoose.model("Article",articleSchema)

module.exports = Article;