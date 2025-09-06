const aka= new Promise((resolve,reject)=>{

    var willOfHeart =true;
    
   if(willOfHeart) {
    const obj={dec:'yes',willOfHeart:'false'};
    
    resolve(obj);
    console.log(typeof resolve)
   }
    else reject("NO")
})


aka.then((result)=>{

    console.log(result.dec,result.willOfHeart)
   
})
.catch((result)=>{
    console.log(result, "sorry dude"  ,'false')

})

// const obj={
//     name_:"debayon",
//     roll:202292
// }

// function check(a){// its like resolve
// return a;
// }
// var k=check(obj);// its like .then
// console.log(obj.name_)