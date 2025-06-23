import express from "express";

const app = express();


app.get('/',(req,res) =>{
    res.send("hello world from typescript");
})

app.listen(3000,() => {
    console.log("server is running");
    
})