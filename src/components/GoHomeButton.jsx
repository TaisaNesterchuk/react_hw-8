import { useNavigate } from 'react-router'
import frontRoutes from '../routes/frontRoutes'
import styles from './goHomeButton.module.css'

function GoHomeButton() {
  const navigate = useNavigate()
  function goHome() {
    navigate(frontRoutes.navigate.home)
  }
  return (
   <div className={styles.containerButton} >
    <button className={styles.goHomeButton} onClick={goHome}>Go home</button>
  </div>
  )

 
}

export default GoHomeButton
