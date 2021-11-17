var mongoose = require("mongoose")

var Schema = mongoose.Schema;

var commentsSchema = new Schema({
    content:String,
    author:Schema.Types.ObjectId,
    article:Schema.Types.ObjectId
},{timestamps:true})

var Comment = mongoose.model("Comment",commentsSchema)

module.exports = Comment;