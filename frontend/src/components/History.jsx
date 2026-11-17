import React from 'react'
import { useEffect } from 'react';
//import serverHistory from '../../service/historyServer.js';
import { useState } from 'react';


export default  function History({loading,history,displayHistory,error}){


   
return(
    <>
   {
    loading?(
        <h4>history is loading</h4>
    ):error?(
        <h4>{error}</h4>
    ):history.length===0?(
        <h4>history is empty</h4>
    ):(
        <div >
        { history.map((ele)=>(
                <div key={ele.id}>
                    <h3>{ele.query}</h3>
                    <h4>{ele.answer}</h4>
                </div>
    

            ))
        }
        </div>
    )
   }
   <button onClick={displayHistory}disabled={loading} >
    {
        loading?"Refreshing...":"Refresh"
            
        
    }
   </button>
    </>
)
 }



// export default function History({history,loading,historyError,fetchHistory}) {
//   return (
//     <>
//     {loading?(
//         <h4>history is fetching</h4>
//     ):
//         historyError?(
//             <h4>{historyError}</h4>
//     ): history.length===0?(

//       <h4>history is empty</h4>
//     ):(
//         history.map((ele)=>(
//             <div key={ele.id}>
//                 <h4>{ele.query}</h4>
//                 <h5>{ele.answer}</h5>
//             </div>
        
//     )}
//     <button onClick={fetchHistory} disabled={loading}>{loading?(
//         "fetching history"
//     ):(
//         "refresh"
//     )}</button>
//    </>
//   )
// }
