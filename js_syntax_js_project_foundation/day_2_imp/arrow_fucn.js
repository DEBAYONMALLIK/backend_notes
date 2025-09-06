var name = () => console.log(5);

name();

var sum = (a,b) => a+b; // sum is func name , no need to write return
 console.log(sum(2,4))



// disatvantage of arror func .can't provide the arguments.
var multiPle = (a,b) =>{
    console.log(Math.random()-a);
    console.log(arguments)
    return a+b;
    
  
}
console.log(multiPle(4,1))

// advt of normal funct is that it can provide the argumets when called
function  multi_Ple(a,b){
    console.log(Math.random()-a);
    console.log(arguments)
    return a+b;
}
console.log(multi_Ple(2,3))