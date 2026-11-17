import React, { useState } from 'react'
import Questionform from '../components/Questionform'
import AnswerForm from '../components/AnswerForm'
export default function Ask() {
   const [answer,setAnswer]=useState("")
   const [error,setError]=useState("")
    function getAnswerFromQF(answer,error){
           setAnswer(answer)
           setError(error)
    }
  return (
    <>
    <Questionform getAnswerFromQF={getAnswerFromQF} />
    <AnswerForm  answer={answer} error={error} />
    </>
  )
}
