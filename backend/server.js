import express from "express";
const app=express();
app.get("/",(req,res)=>{
    res.send("hellow")
})
app.get("/about",(req,res)=>{
    res.send("learn calculus with ai");
})
app.listen(8000,()=>{
    console.log("running on the sever");
})
