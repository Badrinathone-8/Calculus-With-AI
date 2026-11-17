import React, { useState } from 'react'

 const SlectTopic = ({newTopic}) => {
    const topics=[
        {
        name:"limit" ,message: "welcome to topic limit"
    },
    {
       name:"derivative" ,message:"welcome to topic derivative "
    },
    {
       name:"calculus", message:"welcome to topic calculus"
    }
]
    const [topic,setTopic]=useState("")
    function getTopic(){
      let result=topics.find((ele)=>ele.name==topic)
      newTopic(result.message)
    }
  return (
    <>
    <div>SlectTopic</div>
    <input type='text' placeholder='enter topic' value={topic}
    onChange={(event)=>setTopic(event.target.value)}
    />
    <button onClick={getTopic}>click</button>
    </>
  )
}
