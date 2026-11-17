import React from 'react'
import History from '../components/History'
import historyServer from '../../service/historyServer'

export default function HistoryPage() {
    const {loading,history,displayHistory}=historyServer()
  return (
    <>
    <History loading={loading} history={history} displayHistory={displayHistory} />
    </>
  )
}
