var express = require("express")
var app=express();

app.get("/lsht",(req,resp)=>{
    resp.send("hello")
})
module.exports=app.listen(3000,()=>{console.log("server started")})