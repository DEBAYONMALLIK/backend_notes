var https=require("http")
var server=https.createServer((request,response)=>{
    if(request.url==="/hello") response.end("hello uyfuyfyworld")
        else response.end("give correct URL");
})
server.listen(8000,()=>{
    console.log("server has started")
})