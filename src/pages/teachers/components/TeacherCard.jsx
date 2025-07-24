import styles from './TeacherCard.module.css'
import { useNavigate } from 'react-router'
import frontRoutes from '../../../routes/frontRoutes'

function TeacherCard({ teacher, onSelect, isSelected, onDelete, showActions = true }) {
   const navigate = useNavigate()

  const handleEditTeacher = () => {
    navigate(frontRoutes.navigate.teachers.edit(teacher.id))
  }

  return (
   <div className={styles.teacherCard}>

    <div className={styles.container}>
      <div className={styles.section1}>
        <img src={teacher.photo} alt="photo" />
        <div>
          <div>{teacher.name}</div>
          <div>{teacher.subject}</div>
        </div>
      </div>
      <div className={styles.section2}>
        {onSelect ? (
          <button onClick={() => onSelect(teacher.id)}>
            {isSelected ? 'Deselect' : 'Select'}
          </button>
        ) : null}
      </div>
    </div>

    { showActions && ( 
    <div className={styles.buttonTeacherCard}>
      <button className={styles.buttonEdit} onClick={handleEditTeacher}>Редагувати</button>
      <button className={styles.buttonDelete} onClick={() => onDelete(teacher.id)}>
         Видалити
      </button>
    </div>
      )}
   </div> 
  )
}

export default TeacherCard
