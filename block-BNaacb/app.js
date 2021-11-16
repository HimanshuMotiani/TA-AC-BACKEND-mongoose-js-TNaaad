var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/sample",{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    console.log(err? err: "connected to databse");
})