 const Iphone={
    name:"iphone",
    model:15,
    processor:"A15",
    camera:{
        front:12,
        back:48
    }
 }
 console.log(Iphone.camera)
 Iphone.color="yellow";
for(const i in Iphone){
    console.log(i,'=>',Iphone[i]);
}
console.log(Object.keys(Iphone).length  )
console.log(Object.values(Iphone))
console.log(Object.entries(Iphone))
console.log(Iphone)