const soham= new Promise((resolve,reject)=>{

    setTimeout(()=>{
        if(Math.random()>0.5){resolve("will bring my Guitar");}
        else{reject("soham : over n out")}; 
    },4000)
});

const sayak= new Promise((resolve,reject)=>{
 
    setTimeout(()=>{
        if(Math.random()>0.5){resolve("will bring vodka");}
        else{reject("sayak : you guys enjoy")}; 
    },2000)
});
// .all is like OR gate
Promise.any([soham,sayak]) // will check any true  promise then executes .then
.then((result)=>console.log("lets bring it on,",result))
.catch((result)=>console.log(result)); // if all are rejected 