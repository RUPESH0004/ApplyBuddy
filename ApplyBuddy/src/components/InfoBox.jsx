import React from 'react'
import './infoBox.css';
export default function InfoBox({Tittle="Add"},onADD) {
  return (
   
     <div id ="info-box">
        <h3>{!Tittle?"ADD":Tittle}</h3>
        <p>Info About the {Tittle}</p>
        <button onClick={onADD}>{!Tittle? "ADD":"OPEN"}</button>
    </div>
   
  )
}
