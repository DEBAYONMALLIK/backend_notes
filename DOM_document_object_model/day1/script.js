let p=document.getElementById("ele1");
p.addEventListener("click",function(){
    p.style.backgroundColor="yellow";
    p.style.color="white";
})
p.addEventListener("mouseleave",function(){
    p.style.backgroundColor="white";
    p.style.color="black";
})


let k=document.getElementById("ele2");
k.addEventListener("mouseenter",function(){
    k.style.backgroundColor="blue";
    k.style.color="white";
});

k.addEventListener("mouseleave",function(){
    k.style.backgroundColor="white";
    k.style.color="black"
});

let m=document.getElementById("ele3");
k.addEventListener("click",function(){
    m.style.backgroundColor="red";
    m.style.color="blue";
});

m.addEventListener("click",function(){
    p.innerHTML="Dialga"
    p.style.backgroundColor="pink";
    p.style.color="white";
})