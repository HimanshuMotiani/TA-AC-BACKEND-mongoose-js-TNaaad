var express = require("express");
var mongoose = require("mongoose");
var User = require("./models/user")

var app = express();

mongoose.connect("mongodb://localhost/sample",{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    console.log(err?err:"connected");
})

//middleware
app.use(express.json())

// route middleware
app.post("/users",(req,res)=>{
    User.create(req.body,(err,userDetail)=>{
        console.log(userDetail);
        res.send(userDetail)
    })
})
app.get("/users",(req,res)=>{
    User.find((err,userDetail)=>{
        res.json(userDetail)
    })
})
app.get("/users/:id",(req,res)=>{
    var id = req.params.id;
    User.findById(id,(err,userDetail)=>{
        res.json(userDetail)
    })
})
app.get("/users/:id",(req,res)=>{
    var id = req.params.id;
    User.findOne({_id: id},(err,userDetail)=>{
        console.log(userDetail);
        res.json(userDetail)
    })
})
app.put("/users/:id",(req,res)=>{
    var id = req.params.id;
    User.findByIdAndUpdate(id,req.body,{new:true},(err,updatedDetail)=>{
        console.log(updatedDetail);
        res.json(updatedDetail)
    })
})
app.put("/users/:id",(req,res)=>{
    var id = req.params.id;
    User.updateOne({_id:id},req.body,{new:true},(err,updatedDetail)=>{
        console.log(updatedDetail);
        res.json(updatedDetail)
    })
})
app.put("/users/:id",(req,res)=>{
    var id = req.params.id;
    User.findOneAndUpdate({_id:id},req.body,{new:true},(err,updatedDetail)=>{
        console.log(updatedDetail);
        res.json(updatedDetail)
    })
})
app.delete("/users/:id", (req, res) => {
    var id = req.params.id;
    User.findByIdAndDelete(id, (err, user) => {
      if (err) return next(err);
      res.send("user deleted");
    });
});
app.listen(4000,()=>{})