const fs=require('fs');
fs.writeFile('myfile.txt',(error,data)=>{
if(error){
console.log(error);}
else{
console.log(data);
console.log(data.toString());
}
});

fs.readFile('myfile.txt',(error,data)=>{
    if(error){
    console.log(error);}
    else{
    console.log(data);
    console.log(data.toString());
    }});