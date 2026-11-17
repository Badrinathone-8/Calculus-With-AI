import React from 'react'
import {useState} from "react"

export default function Questionform({getAnswerFromQF}) {
    const[query,setQuery]=useState("")
    const[loading,setLoading]=useState(false)
   
    async function  getQuestion(event) {
        event.preventDefault()
            if(query.trim()==""){
                return alert("Enter a valid question")
            }
            if(!loading){
        try{
            
            

             setLoading(true)
             const response=await fetch("http://localhost:8000/api/query",{
            method:"POST",
            headers:{
                "content-Type":"Application/json",
            },
            body:JSON.stringify({
                query:query
            })
        })
        
        if(!response.ok){
            
            
           getAnswerFromQF("","Invalid Question")
           return;
        }
        
        const result=await response.json()
                
             
                getAnswerFromQF(result.answer,"")
                setQuery("")
                
    

        }catch(err){
            setLoading(true)
            getAnswerFromQF("","Network failure")
           
        }
        finally{
         setLoading(false)
        }
    }
        
    }

  return (
    <>
    <div className="container" >
     <form onSubmit={getQuestion}>
        <input type="text"placeholder="enter query" value={query} onChange={(event)=>setQuery(event.target.value)} />
            <button type="submit"  disabled={loading}>{loading?"submiting..":"submit"}</button>
     </form>
            
        
        
    </div>
    </>
  )
}
