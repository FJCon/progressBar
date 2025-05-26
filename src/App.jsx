import { useState } from 'react'
import Form from './components/Form/Form'
import Timer from './components/Timer/Timer'
import './App.css'

function App() {
  console.log('Buscando informacion de usuario en localStorage...')
  const data = localStorage.getItem('data')
  const dataJson = JSON.parse(data)
  
  console.log(dataJson)
  if(dataJson) {console.log(dataJson.lenght)}
    

  return (
    <>
      {(!dataJson || dataJson.lenght == 0) ? <Form/> : <Timer userData={dataJson}/>}
    </>
  )
}

export default App
