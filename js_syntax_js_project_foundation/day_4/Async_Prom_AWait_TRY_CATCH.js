console.log("first_line")

async function lets_See() { // async func

const pro=new Promise((resolve,reject)=>{ // promise
    setTimeout(()=>{reject("hi")},5000);  // computation
})

try{// TRY IS USED BCZ IF REJECT IS RETURNES THEN AWAIT CANT HANDLE REJECTION.
    let result = await pro; // resolve comes here  [YOU CAN ONLY STOP A PROMISE]
    console.log("resolve",result)
}
    catch(result){console.log("reject",result)} // reject goes here

    console.log("LAST_line")

}

lets_See()