
console.log("first");

async function check() {
    console.log("insie 1st")
    const k = new Promise((resolve, reject) => {
        setTimeout(() => {
            var dec = false;
            if (dec == false) resolve("inside_promise");
            else reject("false statement");
        }, 5000)
    })
    
    try{
    let result = await k;
    console.log(result);
    }catch(error){
        console.log(error)

    }
   
    console.log("last fucn")
    console.log("last fucn")
    console.log("last fucn")

}


check();
console.log("not last_but yes pos is last")

