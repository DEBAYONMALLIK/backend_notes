console.log("hi");

function a(){
    setTimeout(()=>{console.log("inside settimeout")},1000);
    console.log("2")
  
    console.log("3");
    setTimeout(()=>{console.log("rtrh")},1000);
}
a();
console.log("4")