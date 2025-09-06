var obj={
    'name':"debayon",
    "gender":'male',
    "laptop":"Asus",
    "single":"True"
};
for (const i in obj) {
  console.log(i,obj[i])// not onj["i"]
}