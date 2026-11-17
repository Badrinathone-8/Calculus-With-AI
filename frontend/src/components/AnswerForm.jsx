import React from 'react'

export default function AnswerForm({answer,error}) {

  return (
   <>
      <h2>{error}</h2>

   <h1>{answer}</h1>
   </>
  )
}
