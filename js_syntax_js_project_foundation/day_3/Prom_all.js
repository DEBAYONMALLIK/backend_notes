const soham= new Promise((resolve,reject)=>{

    setTimeout(()=>{
        if(Math.random()>0.5){resolve("will bring my Guitar");}
        else{reject("soham : over n out")}; 
    },3000)
});

const sayak= new Promise((resolve,reject)=>{
    var will=true;
    setTimeout(()=>{
        if(Math.random()>0.5){resolve("will bring vodka");}
        else{reject("sayak : you guys enjoy")}; 
    },2000)
});
// .all is like AND gate
Promise.all([soham,sayak]) // will check all the promise then executes then
.then((result)=>console.log("lets bring it on",result))
.catch((result)=>console.log(result)); // only first rejected will gets executed 
