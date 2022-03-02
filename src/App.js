import React,{useEffect, useState} from 'react'
import Title from './Components/Title'
import MassageList from './Components/MassageList'
import SendMassageForm from './Components/SendMassageForm'


import './App.css'
function App() {
 return (
   <div>
     <Title />
     <MassageList />
     <SendMassageForm />
   </div>
 )
}

export default App;
