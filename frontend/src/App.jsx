import { useCallback, useState } from 'react'
import { useEffect } from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import HistoryPage from './pages/HistoryPage'
import Ask from './pages/Ask'
import Navbar from './components/Navbar.jsx'
//import Questionform from "./components/Questionform.jsx"
//import historyServer from '../service/historyServer.js'
// import AnswerForm from "./components/AnswerForm.jsx"
//import History from "./components/History.jsx"
export default function App() {
  const [answer,setAnswer]=useState("")
  const [error,setError]=useState("")

  //const {history,loading,displayHistory}=historyServer()
// const getAnswerFromQF=(answer,error)=>{
//   setAnswer(answer)
//   setError(error)
// }

  
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/ask" element={<Ask/>} />
      <Route path="/history" element={<HistoryPage/>} />
    </Routes>
  </>
      
  )
}
