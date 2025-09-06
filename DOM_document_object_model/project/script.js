var f1=document.getElementById("first")
console.log(f1);
var prev=f1.innerHTML;
f1.addEventListener('mouseenter',function(){
    let m=Math.floor(100*Math.random());
    f1.innerHTML=`<h1>${m}</h1>`;
})

f1.addEventListener('mouseleave',function(){
  
    f1.innerHTML=prev;
})
// from 0 to 100
0 