var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/sample",{useUnifiedTopology:true,useNewUrlParser:true},(err)=>{
    console.log(err? err: "connected");
})