import styles from './Display.module.css'

const Display = ({display}) => {
  return (
    <>
    <input className={styles.input} type="text" value={display} readOnly />
    </>
  )
}

export default Display