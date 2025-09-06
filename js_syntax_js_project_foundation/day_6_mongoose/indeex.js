const mongoose=require('mongoose');

const stud_model =require("C:\\Users\\darks\\Desktop\\java_script\\js_syntax_js_project_foundation\\day_6_mongoose\\models\\students.models.js")
// connect to server
mongoose.connect('mongodb://127.0.0.1:27017/backend_mongo')

.then(()=>console.log("connected"))
.catch(()=>console.log("not connnected"))// file location
var db=mongoose.connection;//  connect

db.on("error",()=>{console.log("error while connecting to server")})
db.once("open",()=>{
    console.log("sucessfully connected")
     init();
})

async function init(){
const student={
    name :'debayon',
    age:21,
}
 const std_obj= await stud_model.create(student);
 console.log(typeof std_obj);
}

// dont click run button ,just write node indexx.js in terminal