
import { useState } from 'react'
import './App.css'
import ButtonContainer from './Components/ButtonContainer'
import Display from './Components/Display'

function App() {
  const [calVal, setCalVal] = useState("");

  const handleButtons = (buttonText) => {
    if(buttonText === 'C'){
      setCalVal("");
    } else if(buttonText === '='){
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplay = calVal + buttonText;
      setCalVal(newDisplay);
    }
  }
  return (
    <center>
    <h1>Calculator</h1>
    <div className='container'>
      <Display display={calVal}/>
      <ButtonContainer button={handleButtons}/>
    </div>
    </center>
  )
}

export default App
