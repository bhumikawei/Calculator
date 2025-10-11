
import './App.css'
import ButtonContainer from './Components/ButtonContainer'
import Display from './Components/Display'

function App() {
  return (
    <>
    <h1>Calculator</h1>
    <div className='container'>
      <Display/>
      <ButtonContainer/>
    </div>
    </>
  )
}

export default App
