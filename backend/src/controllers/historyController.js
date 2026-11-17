import history from "../data/history.js";
import express from "express"

export const showHistory=(req,res)=>{
   res.status(200).json(history)
}