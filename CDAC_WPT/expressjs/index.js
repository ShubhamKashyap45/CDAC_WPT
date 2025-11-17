import express  from "express";

const app = express();
app.get('/',(req,res)=>{
    res.send("<h1>homepage</h1>")
});
app.get('/login',(req,res)=>{
    res.send("<h1>Login</h1>")
});
app.get('/signup',(req,res)=>{
    res.send("<h1>Sign up</h1>")
});

app.listen(4000,()=>{
    console.log("server is started ");
    
});