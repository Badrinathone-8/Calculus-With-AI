
import { useState,useEffect } from "react";
export default function historyServer(){
   const[loading,setLoading]=useState(true);
   const [error,setError]=useState("");
   const [history,setHistory]=useState([])

   async function displayHistory(){
    try{
        setLoading(true)
        setError("")
        const response=await fetch("http://localhost:8000/api/history");
        if(!response.ok){
            throw new Error("Network issue")
        }
        const data=await response.json()
        setHistory(data)
    }catch(err){
    setError(err)
    }finally{
        setLoading(false)
    }
   }
   useEffect(()=>{
    displayHistory()
   },[])

   return {
    history,loading,displayHistory,error
   }
}