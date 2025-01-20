import  NavBar  from "./components/NavBar";
import InfoBox from './components/InfoBox';
import {useEffect, useState} from 'react'
function App() {
   const[Tittle,setTittle]=useState('')
   function handleOnAdd (newValue) {
   setTittle(newValue);   
   }
 return (
    <>
    <NavBar/>
    <div id = "content-info">
    <InfoBox Tittle = {Tittle} onADD = {handleOnAdd}/>
    </div>
    </>
 )
}

export default App
