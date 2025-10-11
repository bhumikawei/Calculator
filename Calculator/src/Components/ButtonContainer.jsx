import styles from './ButtonContainer.module.css'

const ButtonContainer = ({button}) => {

  const buttonNames = ['1', '2', '3', 'C', '4' ,'5', '6', '+', '7', '8', '9', '-', '=', '0', '*', '/']
  return (
    <div className={styles.ButtonContainer}>
    {buttonNames.map((buttonName => <button key={buttonName} className={styles.button} onClick={() => button(buttonName)}>{buttonName}</button>))}
    </div>
  )
}

export default ButtonContainer