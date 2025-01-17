import  NavBar  from "./components/NavBar";
import InfoBox from './components/InfoBox';
import {useEffect, useState} from 'react'
function App() {
   function handleOnAdd () {
      
   }
   const[Tittle,setTittle]=useState("")
  useEffect(()=>{
   setTittle("personal-Info")
  },[])
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
