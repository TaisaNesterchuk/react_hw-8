import { useLocation } from 'react-router'
import { useNavigate } from 'react-router'
import frontRoutes from '../routes/frontRoutes'
import TeacherCard from './teachers/components/TeacherCard'
import styles from './Meeting.module.css'

function Meeting() {
  const navigate = useNavigate()
  const { state } = useLocation()
  let content
  if (state?.teachers)
    content = (
      <div>
        {state.teachers.map((teacher) => (
          <TeacherCard teacher={teacher}
          showActions={false} />
        ))}
      </div>
    )
  else content = <h2 className={styles.text2}>No teachers</h2>

  const numbersTeachers = state?.numbersTeachers || 0

  const handleBackToList = () => {
      navigate(frontRoutes.navigate.teachers.index)
    }

  return (
    <div className={styles.containerMeeting}>
      <h1 className={styles.text}>Учасники зборів</h1>
      <div className={styles.list}>Список вчителів ({numbersTeachers}) для виклику на збори</div>
      {content}
      <button className={styles.buttonBack} onClick={handleBackToList}>Повернутися до списку вчителів</button>
    </div>
  )
}

export default Meeting
