// func scope
var func =()=> {
var m=34; // local var
return m;
}

console.log(func);


// global scope
var k=2;// it is local as there are no /int main()/ function


// block scope

{
    var z=23; // block Scope is not applicable in var 
    console.log(z)
}
console.log(z) // with in scope



{
    let v=99; // mut use let if we want to implement BLOCK SCOPE 
    console.log(v);
}
console.log(v) // out of scope
