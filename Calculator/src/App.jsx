
import { useState } from 'react'
import './App.css'
import ButtonContainer from './Components/ButtonContainer'
import Display from './Components/Display'

function App() {
  const [calVal, setCalVal] = useState("");
  return (
    <center>
    <h1>Calculator</h1>
    <div className='container'>
      <Display display={calVal}/>
      <ButtonContainer/>
    </div>
    </center>
  )
}

export default App
