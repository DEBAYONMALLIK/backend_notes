const aka= new Promise((resolve,reject)=>{

    var willOfHeart =false;
    
   if(willOfHeart) {
    
    resolve("YES")
   }
    else reject("NO")
})


aka.then((result)=>{
    console.log(result, "i want you"  ,'true')

})
.catch((result)=>{
    console.log(result, "sorry dude"  ,'false')

})