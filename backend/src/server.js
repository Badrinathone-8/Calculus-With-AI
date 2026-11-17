import express from "express";
import cors from "cors"
import router from "./routes/questionRouter.js";
const app=express()
app.use(cors())

app.use(express.json());
app.use("/api",router)

app.get("/",(req,res)=>{
    res.send("Calculus with AI")
})
app.listen(8000,()=>{
    console.log("http://localhost:8000")
    //res.send("Server is running")
})