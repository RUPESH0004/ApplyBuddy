import React from 'react'
import './infoBox.css';
export default function InfoBox({onADD,Tittle}) {
 
  return (
     <div id ="info-box">
        <h3>
          {!Tittle? "ADD":Tittle}
        </h3>
        <input type='text' onChange={(e)=>onADD(e.target.value)} className="border-none bg-transparent outline-none text-inherit font-inherit p-0 m-0 w-auto"/>
        <br/>
        <button>{Tittle?'Open':'ADD'}</button>
    </div>
   
  )
}
