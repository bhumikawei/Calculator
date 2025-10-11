const ButtonContainer = () => {

  const buttonNames = ['1', '2', '3', 'C', '4' ,'5', '6', '+', '7', '8', '9', '-', '=', '0', '*', '/']
  return (
    <>
    {buttonNames.map((buttonName => <button key={buttonName}>{buttonName}</button>))}
    
    </>
  )
}

export default ButtonContainer