
function abc(){
    var count=0;
    console.log("hi");
    return function(){
        count++;
        return count;
    }
}
let inside=abc();
// here the count para is hidden and not accessable by user

let c=inside();// like call by ref
let d=inside();// like call by ref
console.log(c);
console.log(d);




