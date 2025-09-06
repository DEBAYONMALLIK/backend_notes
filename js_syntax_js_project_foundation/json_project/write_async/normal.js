var fil=require('fs');

fil.appendFile("C:\\Users\\darks\\Desktop\\java_script\\js_syntax_js_project_foundation\\json_project\\write_async\\text.txt","\n appeneed",
    (error)=>{
        if(error) console.log("error");
        else console.log("no eror")
    }
)
setTimeout(()=>{console.log(fil.readFileSync("C:\\Users\\darks\\Desktop\\java_script\\js_syntax_js_project_foundation\\json_project\\write_async\\text.txt",'utf8'))},3000)