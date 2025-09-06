
function outer( param){

    return function(num){
        return num+param;
    }

}

var k= outer(1); // outer func
var inn=k(1) // inner value
var innn=k(2)
console.log(typeof(innn))

console.log(innn);

