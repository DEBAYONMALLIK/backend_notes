const obj={
    name:"linkin",
    year:1996,
    role:"Vocalist",
    instruments:{
        guitar :3,
        keyboard:1,
        drum:1,
        dj:1
    }
}



const {instruments:{guitar,dj}}=obj;
console.log(guitar)