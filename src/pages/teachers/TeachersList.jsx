import { useNavigate } from 'react-router'
import frontRoutes from '../../routes/frontRoutes'
import useTeachersApi from '../../hooks/useTeachersApi'
import { useEffect, useState } from 'react'
import TeacherCard from './components/TeacherCard'
import styles from './TeacherList.module.css'

function TeachersList() {
  const navigate = useNavigate()
  const { data: teachersList, loading, error, fetchTeachers, deleteTeacher } = useTeachersApi()
  const [selectedTeachersId, setSelectedTeachersId] = useState([])

  useEffect(() => {
    fetchTeachers()
  }, [fetchTeachers])

  const handleDelete = async (id) => {
  await deleteTeacher(id)
}

  function goToMeeting() {
    navigate(frontRoutes.navigate.meeting, {
      state: {
        teachers: teachersList.filter((teacher) =>
          selectedTeachersId.includes(teacher.id)
        ),
         numbersTeachers: selectedTeachersId.length,
      },
    })
  }

  const onSelect = (id) => {
    if (selectedTeachersId.includes(id))
      setSelectedTeachersId((prev) => prev.filter((tId) => tId !== id))
    else setSelectedTeachersId((prev) => [...prev, id])
  }

  let content
  if (loading) content = <h2>Loading...</h2>
  else if (error) content = <h2>Error!</h2>
  else
    content = (
      <div className={styles.container}>
        {teachersList.map((teacher) => (
          <TeacherCard
            key={teacher.id}
            teacher={teacher}
            onSelect={onSelect}
            isSelected={selectedTeachersId.includes(teacher.id)}
            onDelete={() => handleDelete(teacher.id)}
          />
        ))}
      </div>
    )

  const handleAddTeacher = () => {
    navigate(frontRoutes.navigate.teachers.add)
  }

  return (
    <div className={styles.containerTeachersList}>
      <h1 className={styles.text}>Список вчителів</h1>
      <div className={styles.buttonTeachersList}>
         <button className={styles.buttonAdd} onClick={handleAddTeacher}>Додати нового вчителя</button>
         <button className={styles.buttonMeeting} onClick={goToMeeting}>Викликати {selectedTeachersId.length} вчителів на збори</button>
      </div>
      {content}
    </div>
  )
}

export default TeachersList
